type Props = {}

function LearnAboutMintPare({}: Props) {
  return (
    <div className="main-container">
      <div className="max-w-4xl mx-auto border-purple-500 flex flex-col md:flex-row gap-3 border-2 border-opacity-35 rounded-2xl w-full p-5">
        <div className="mr-auto my-auto">
          <h4 className="text-purple-200 text-2xl mb-2">New to Community?</h4>
          <p className="text-purple-200 text-opacity-80">
            Learn more about MintPare product and the idea behind it
          </p>
        </div>
        <div className="ml-auto  my-auto">
          <a
            href="https://mintpare.xyz/about"
            target="_blank"
            className="btn btn-primary"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default LearnAboutMintPare
