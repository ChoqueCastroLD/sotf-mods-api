/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Console_DescriptionInputs */

const en_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You get a signal when the curator of one of these kits changes it.`)
};

const es_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recibes una señal cuando el curador de alguno de estos kits lo modifica.`)
};

const de_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du wirst benachrichtigt, wenn der Kurator eines dieser Kits es ändert.`)
};

const fr_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous êtes prévenu lorsque le curateur de l’un de ces kits le modifie.`)
};

const it_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricevi una segnalazione quando il curatore di uno di questi kit lo modifica.`)
};

const nl_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je krijgt een melding als de curator van een van deze kits hem wijzigt.`)
};

const pl_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dostaniesz powiadomienie, gdy autor któregoś z tych zestawów go zmieni.`)
};

const pt_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você recebe um sinal quando o curador de um destes kits o altera.`)
};

const ru_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы получите сигнал, когда автор одного из этих наборов изменит его.`)
};

const sv_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du får en signal när kuratorn för något av dessa kits ändrar det.`)
};

const tr_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kitlerden birinin küratörü onu değiştirdiğinde sinyal alırsın.`)
};

const zh_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这些套件的策展人更新套件时，你会收到通知。`)
};

const ja_kitsocial_console_description = /** @type {(inputs: Kitsocial_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これらのキットが更新されると通知が届きます。`)
};

/**
* | output |
* | --- |
* | "You get a signal when the curator of one of these kits changes it." |
*
* @param {Kitsocial_Console_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_console_description = /** @type {((inputs?: Kitsocial_Console_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_console_description(inputs)
	if (locale === "de") return de_kitsocial_console_description(inputs)
	if (locale === "fr") return fr_kitsocial_console_description(inputs)
	if (locale === "it") return it_kitsocial_console_description(inputs)
	if (locale === "nl") return nl_kitsocial_console_description(inputs)
	if (locale === "pl") return pl_kitsocial_console_description(inputs)
	if (locale === "pt") return pt_kitsocial_console_description(inputs)
	if (locale === "ru") return ru_kitsocial_console_description(inputs)
	if (locale === "sv") return sv_kitsocial_console_description(inputs)
	if (locale === "tr") return tr_kitsocial_console_description(inputs)
	if (locale === "zh") return zh_kitsocial_console_description(inputs)
	if (locale === "ja") return ja_kitsocial_console_description(inputs)
	return en_kitsocial_console_description(inputs)
});
