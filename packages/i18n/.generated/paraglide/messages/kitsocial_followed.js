/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_FollowedInputs */

const en_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You follow this kit. You will get a signal when it changes.`)
};

const es_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sigues este kit. Recibirás una señal cuando cambie.`)
};

const de_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du folgst diesem Kit. Du wirst bei Änderungen benachrichtigt.`)
};

const fr_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous suivez ce kit. Vous serez prévenu lorsqu’il change.`)
};

const it_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui questo kit. Riceverai una segnalazione quando cambia.`)
};

const nl_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgt deze kit. Je krijgt een melding als hij verandert.`)
};

const pl_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujesz ten zestaw. Dostaniesz powiadomienie, gdy się zmieni.`)
};

const pt_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você segue este kit. Receberá um sinal quando ele mudar.`)
};

const ru_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы подписались на этот набор. Вы получите сигнал, когда он изменится.`)
};

const sv_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du följer det här kitet. Du får en signal när det ändras.`)
};

const tr_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kiti takip ediyorsun. Değiştiğinde bir sinyal alacaksın.`)
};

const zh_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已关注此套件，它更新时你会收到通知。`)
};

const ja_kitsocial_followed = /** @type {(inputs: Kitsocial_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このキットをフォローしました。更新されると通知が届きます。`)
};

/**
* | output |
* | --- |
* | "You follow this kit. You will get a signal when it changes." |
*
* @param {Kitsocial_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_followed = /** @type {((inputs?: Kitsocial_FollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_FollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_followed(inputs)
	if (locale === "de") return de_kitsocial_followed(inputs)
	if (locale === "fr") return fr_kitsocial_followed(inputs)
	if (locale === "it") return it_kitsocial_followed(inputs)
	if (locale === "nl") return nl_kitsocial_followed(inputs)
	if (locale === "pl") return pl_kitsocial_followed(inputs)
	if (locale === "pt") return pt_kitsocial_followed(inputs)
	if (locale === "ru") return ru_kitsocial_followed(inputs)
	if (locale === "sv") return sv_kitsocial_followed(inputs)
	if (locale === "tr") return tr_kitsocial_followed(inputs)
	if (locale === "zh") return zh_kitsocial_followed(inputs)
	if (locale === "ja") return ja_kitsocial_followed(inputs)
	return en_kitsocial_followed(inputs)
});
