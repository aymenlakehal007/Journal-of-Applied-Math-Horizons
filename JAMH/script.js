// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Animation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.article-card, .section-title, .cta-section').forEach(el => {
        observer.observe(el);
    });
    
    // Form submission handling
    const submitForm = document.getElementById('submission-form');
    if (submitForm) {
        submitForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Reset form
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                alert('Thank you for your submission! Our editorial team will review your paper and contact you soon.');
            }, 2000);
        });
    }
    
    // Template download
    const downloadBtn = document.getElementById('download-template');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';
            
            // Simulate download preparation
            setTimeout(() => {
                // Reset button
                this.innerHTML = originalText;
                
                // Create a download link
                const link = document.createElement('a');
                link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(`\\documentclass{article}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{graphicx}
\\usepackage{hyperref}

\\title{Your Paper Title}
\\author{Your Name}
\\date{\\today}

\\begin{document}

\\maketitle

\\begin{abstract}
Your abstract here...
\\end{abstract}

\\section{Introduction}
Your introduction here...

\\section{Main Results}
Your main results here...

\\section{Proofs}
Your proofs here...

\\section{Conclusion}
Your conclusion here...

\\bibliographystyle{plain}
\\bibliography{references}

\\end{document}`);
                link.download = 'jamh-template.tex';
                link.click();
                
                // Show confirmation
                alert('LaTeX template downloaded successfully!');
            }, 1500);
        });
    }
});