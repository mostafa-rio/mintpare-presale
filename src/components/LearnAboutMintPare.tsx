type Props = {}

function LearnAboutMintPare({}: Props) {
  return (
    <div className="border-purple-500 md:flex border-2 border-opacity-35 rounded-2xl w-full p-5 main-container">
      <div className="mr-auto my-auto">
        <h4 className="text-purple-200 text-2xl mb-2">New to Community?</h4>
        <p className="text-purple-200 text-opacity-80">
          Learn more about MintPare product and the idea behind it
        </p>
      </div>
      <div className="ml-auto  my-auto">
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  )
}

export default LearnAboutMintPare
