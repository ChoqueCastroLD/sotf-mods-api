/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Visibility_UnlistedInputs */

const en_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlisted`)
};

const es_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No listado`)
};

const de_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht gelistet`)
};

const fr_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non répertorié`)
};

const it_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non in elenco`)
};

const nl_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet vermeld`)
};

const pl_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niepubliczny`)
};

const pt_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não listado`)
};

const ru_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По ссылке`)
};

const sv_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olistat`)
};

const tr_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listelenmemiş`)
};

const zh_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅限链接`)
};

const ja_kits_visibility_unlisted = /** @type {(inputs: Kits_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`限定公開`)
};

/**
* | output |
* | --- |
* | "Unlisted" |
*
* @param {Kits_Visibility_UnlistedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_visibility_unlisted = /** @type {((inputs?: Kits_Visibility_UnlistedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Visibility_UnlistedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_visibility_unlisted(inputs)
	if (locale === "de") return de_kits_visibility_unlisted(inputs)
	if (locale === "fr") return fr_kits_visibility_unlisted(inputs)
	if (locale === "it") return it_kits_visibility_unlisted(inputs)
	if (locale === "nl") return nl_kits_visibility_unlisted(inputs)
	if (locale === "pl") return pl_kits_visibility_unlisted(inputs)
	if (locale === "pt") return pt_kits_visibility_unlisted(inputs)
	if (locale === "ru") return ru_kits_visibility_unlisted(inputs)
	if (locale === "sv") return sv_kits_visibility_unlisted(inputs)
	if (locale === "tr") return tr_kits_visibility_unlisted(inputs)
	if (locale === "zh") return zh_kits_visibility_unlisted(inputs)
	if (locale === "ja") return ja_kits_visibility_unlisted(inputs)
	return en_kits_visibility_unlisted(inputs)
});
