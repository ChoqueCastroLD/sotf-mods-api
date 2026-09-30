/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_ContentsInputs */

const en_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contents`)
};

const es_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido`)
};

const de_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalt`)
};

const fr_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu`)
};

const it_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuto`)
};

const nl_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud`)
};

const pl_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zawartość`)
};

const pt_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo`)
};

const ru_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Состав`)
};

const sv_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Innehåll`)
};

const tr_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçerik`)
};

const zh_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

const ja_bundles_contents = /** @type {(inputs: Bundles_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容物`)
};

/**
* | output |
* | --- |
* | "Contents" |
*
* @param {Bundles_ContentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_contents = /** @type {((inputs?: Bundles_ContentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_ContentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_contents(inputs)
	if (locale === "de") return de_bundles_contents(inputs)
	if (locale === "fr") return fr_bundles_contents(inputs)
	if (locale === "it") return it_bundles_contents(inputs)
	if (locale === "nl") return nl_bundles_contents(inputs)
	if (locale === "pl") return pl_bundles_contents(inputs)
	if (locale === "pt") return pt_bundles_contents(inputs)
	if (locale === "ru") return ru_bundles_contents(inputs)
	if (locale === "sv") return sv_bundles_contents(inputs)
	if (locale === "tr") return tr_bundles_contents(inputs)
	if (locale === "zh") return zh_bundles_contents(inputs)
	if (locale === "ja") return ja_bundles_contents(inputs)
	return en_bundles_contents(inputs)
});
