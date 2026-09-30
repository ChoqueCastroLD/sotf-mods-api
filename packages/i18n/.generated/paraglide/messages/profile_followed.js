/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_FollowedInputs */

const en_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Following. You’ll get a signal when they release something.`)
};

const es_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiendo. Recibirás una señal cuando publique algo.`)
};

const de_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du folgst jetzt. Du bekommst ein Signal, wenn etwas Neues erscheint.`)
};

const fr_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abonné. Vous recevrez un signal à chaque nouvelle publication.`)
};

const it_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo segui. Riceverai un segnale quando pubblica qualcosa.`)
};

const nl_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgt nu. Je krijgt een signaal als er iets nieuws uitkomt.`)
};

const pl_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujesz. Dostaniesz sygnał, gdy pojawi się coś nowego.`)
};

const pt_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguindo. Você receberá um sinal quando houver algo novo.`)
};

const ru_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы подписаны. Мы пришлём сигнал, когда выйдет что-то новое.`)
};

const sv_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du följer nu. Du får en signal när något nytt släpps.`)
};

const tr_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ediyorsun. Yeni bir şey yayınladığında sinyal alacaksın.`)
};

const zh_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已关注。有新发布时你会收到信号。`)
};

const ja_profile_followed = /** @type {(inputs: Profile_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォローしました。新しいリリースがあるとシグナルが届きます。`)
};

/**
* | output |
* | --- |
* | "Following. You’ll get a signal when they release something." |
*
* @param {Profile_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_followed = /** @type {((inputs?: Profile_FollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_FollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_followed(inputs)
	if (locale === "de") return de_profile_followed(inputs)
	if (locale === "fr") return fr_profile_followed(inputs)
	if (locale === "it") return it_profile_followed(inputs)
	if (locale === "nl") return nl_profile_followed(inputs)
	if (locale === "pl") return pl_profile_followed(inputs)
	if (locale === "pt") return pt_profile_followed(inputs)
	if (locale === "ru") return ru_profile_followed(inputs)
	if (locale === "sv") return sv_profile_followed(inputs)
	if (locale === "tr") return tr_profile_followed(inputs)
	if (locale === "zh") return zh_profile_followed(inputs)
	if (locale === "ja") return ja_profile_followed(inputs)
	return en_profile_followed(inputs)
});
