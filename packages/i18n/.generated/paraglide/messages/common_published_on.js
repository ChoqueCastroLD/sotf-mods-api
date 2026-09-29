/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Common_Published_OnInputs */

const en_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Published ${i?.date}`)
};

const es_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publicado el ${i?.date}`)
};

const de_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Veröffentlicht am ${i?.date}`)
};

const fr_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publié le ${i?.date}`)
};

const it_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pubblicata il ${i?.date}`)
};

const nl_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gepubliceerd op ${i?.date}`)
};

const pl_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Opublikowano ${i?.date}`)
};

const pt_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publicado em ${i?.date}`)
};

const ru_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Опубликовано ${i?.date}`)
};

const sv_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publicerad ${i?.date}`)
};

const tr_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yayınlanma: ${i?.date}`)
};

const zh_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`发布于 ${i?.date}`)
};

const ja_common_published_on = /** @type {(inputs: Common_Published_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}に公開`)
};

/**
* | output |
* | --- |
* | "Published {date}" |
*
* @param {Common_Published_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_published_on = /** @type {((inputs: Common_Published_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Published_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_published_on(inputs)
	if (locale === "de") return de_common_published_on(inputs)
	if (locale === "fr") return fr_common_published_on(inputs)
	if (locale === "it") return it_common_published_on(inputs)
	if (locale === "nl") return nl_common_published_on(inputs)
	if (locale === "pl") return pl_common_published_on(inputs)
	if (locale === "pt") return pt_common_published_on(inputs)
	if (locale === "ru") return ru_common_published_on(inputs)
	if (locale === "sv") return sv_common_published_on(inputs)
	if (locale === "tr") return tr_common_published_on(inputs)
	if (locale === "zh") return zh_common_published_on(inputs)
	if (locale === "ja") return ja_common_published_on(inputs)
	return en_common_published_on(inputs)
});
