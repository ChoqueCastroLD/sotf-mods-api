/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_Published_TitleInputs */

const en_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published modpacks`)
};

const es_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks publicados`)
};

const de_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichte Modpacks`)
};

const fr_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks publiés`)
};

const it_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack pubblicati`)
};

const nl_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepubliceerde modpacks`)
};

const pl_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikowane modpacki`)
};

const pt_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks publicados`)
};

const ru_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликованные модпаки`)
};

const sv_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicerade modpaket`)
};

const tr_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayındaki mod paketleri`)
};

const zh_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已发布的整合包`)
};

const ja_modpacks_review_published_title = /** @type {(inputs: Modpacks_Review_Published_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開中の Modパック`)
};

/**
* | output |
* | --- |
* | "Published modpacks" |
*
* @param {Modpacks_Review_Published_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_published_title = /** @type {((inputs?: Modpacks_Review_Published_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_Published_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_published_title(inputs)
	if (locale === "de") return de_modpacks_review_published_title(inputs)
	if (locale === "fr") return fr_modpacks_review_published_title(inputs)
	if (locale === "it") return it_modpacks_review_published_title(inputs)
	if (locale === "nl") return nl_modpacks_review_published_title(inputs)
	if (locale === "pl") return pl_modpacks_review_published_title(inputs)
	if (locale === "pt") return pt_modpacks_review_published_title(inputs)
	if (locale === "ru") return ru_modpacks_review_published_title(inputs)
	if (locale === "sv") return sv_modpacks_review_published_title(inputs)
	if (locale === "tr") return tr_modpacks_review_published_title(inputs)
	if (locale === "zh") return zh_modpacks_review_published_title(inputs)
	if (locale === "ja") return ja_modpacks_review_published_title(inputs)
	return en_modpacks_review_published_title(inputs)
});
