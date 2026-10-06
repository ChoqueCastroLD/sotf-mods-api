/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Follow_DoneInputs */

const en_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You are now following. You will be notified when they release something.`)
};

const es_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiendo. Recibirás un aviso cuando publique algo.`)
};

const de_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du folgst jetzt. Du wirst benachrichtigt, wenn etwas Neues erscheint.`)
};

const fr_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abonné. Vous serez averti à chaque nouvelle publication.`)
};

const it_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo segui. Riceverai una notifica quando pubblica qualcosa.`)
};

const nl_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgt nu. Je krijgt een melding als er iets nieuws uitkomt.`)
};

const pl_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujesz. Dostaniesz powiadomienie, gdy pojawi się coś nowego.`)
};

const pt_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguindo. Você será notificado quando houver algo novo.`)
};

const ru_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы подписаны. Мы уведомим вас, когда выйдет что-то новое.`)
};

const sv_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du följer nu. Du får en avisering när något nytt släpps.`)
};

const tr_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ediyorsun. Yeni bir şey yayınladığında bildirim alacaksın.`)
};

const zh_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已关注。有新发布时你会收到通知。`)
};

const ja_profile_follow_done = /** @type {(inputs: Profile_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォローしました。新しいリリースがあると通知が届きます。`)
};

/**
* | output |
* | --- |
* | "You are now following. You will be notified when they release something." |
*
* @param {Profile_Follow_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_follow_done = /** @type {((inputs?: Profile_Follow_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Follow_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_follow_done(inputs)
	if (locale === "de") return de_profile_follow_done(inputs)
	if (locale === "fr") return fr_profile_follow_done(inputs)
	if (locale === "it") return it_profile_follow_done(inputs)
	if (locale === "nl") return nl_profile_follow_done(inputs)
	if (locale === "pl") return pl_profile_follow_done(inputs)
	if (locale === "pt") return pt_profile_follow_done(inputs)
	if (locale === "ru") return ru_profile_follow_done(inputs)
	if (locale === "sv") return sv_profile_follow_done(inputs)
	if (locale === "tr") return tr_profile_follow_done(inputs)
	if (locale === "zh") return zh_profile_follow_done(inputs)
	if (locale === "ja") return ja_profile_follow_done(inputs)
	return en_profile_follow_done(inputs)
});
