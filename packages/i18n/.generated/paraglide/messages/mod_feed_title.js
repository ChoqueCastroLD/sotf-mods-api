/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Feed_TitleInputs */

const en_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Releases of ${i?.name}`)
};

const es_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versiones de ${i?.name}`)
};

const de_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versionen von ${i?.name}`)
};

const fr_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versions de ${i?.name}`)
};

const it_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versioni di ${i?.name}`)
};

const nl_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Releases van ${i?.name}`)
};

const pl_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wydania ${i?.name}`)
};

const pt_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versões de ${i?.name}`)
};

const ru_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Релизы ${i?.name}`)
};

const sv_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versioner av ${i?.name}`)
};

const tr_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} sürümleri`)
};

const zh_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的版本`)
};

const ja_mod_feed_title = /** @type {(inputs: Mod_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のリリース`)
};

/**
* | output |
* | --- |
* | "Releases of {name}" |
*
* @param {Mod_Feed_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_feed_title = /** @type {((inputs: Mod_Feed_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Feed_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_feed_title(inputs)
	if (locale === "de") return de_mod_feed_title(inputs)
	if (locale === "fr") return fr_mod_feed_title(inputs)
	if (locale === "it") return it_mod_feed_title(inputs)
	if (locale === "nl") return nl_mod_feed_title(inputs)
	if (locale === "pl") return pl_mod_feed_title(inputs)
	if (locale === "pt") return pt_mod_feed_title(inputs)
	if (locale === "ru") return ru_mod_feed_title(inputs)
	if (locale === "sv") return sv_mod_feed_title(inputs)
	if (locale === "tr") return tr_mod_feed_title(inputs)
	if (locale === "zh") return zh_mod_feed_title(inputs)
	if (locale === "ja") return ja_mod_feed_title(inputs)
	return en_mod_feed_title(inputs)
});
