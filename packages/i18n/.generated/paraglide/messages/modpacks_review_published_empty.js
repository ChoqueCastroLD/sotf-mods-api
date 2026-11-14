/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_Published_EmptyInputs */

const en_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No published modpacks.`)
};

const es_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay modpacks publicados.`)
};

const de_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine veröffentlichten Modpacks.`)
};

const fr_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun modpack publié.`)
};

const it_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun modpack pubblicato.`)
};

const nl_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen gepubliceerde modpacks.`)
};

const pl_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak opublikowanych modpacków.`)
};

const pt_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum modpack publicado.`)
};

const ru_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет опубликованных модпаков.`)
};

const sv_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga publicerade modpaket.`)
};

const tr_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayında mod paketi yok.`)
};

const zh_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有已发布的整合包。`)
};

const ja_modpacks_review_published_empty = /** @type {(inputs: Modpacks_Review_Published_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開中の Modパックはありません。`)
};

/**
* | output |
* | --- |
* | "No published modpacks." |
*
* @param {Modpacks_Review_Published_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_published_empty = /** @type {((inputs?: Modpacks_Review_Published_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_Published_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_published_empty(inputs)
	if (locale === "de") return de_modpacks_review_published_empty(inputs)
	if (locale === "fr") return fr_modpacks_review_published_empty(inputs)
	if (locale === "it") return it_modpacks_review_published_empty(inputs)
	if (locale === "nl") return nl_modpacks_review_published_empty(inputs)
	if (locale === "pl") return pl_modpacks_review_published_empty(inputs)
	if (locale === "pt") return pt_modpacks_review_published_empty(inputs)
	if (locale === "ru") return ru_modpacks_review_published_empty(inputs)
	if (locale === "sv") return sv_modpacks_review_published_empty(inputs)
	if (locale === "tr") return tr_modpacks_review_published_empty(inputs)
	if (locale === "zh") return zh_modpacks_review_published_empty(inputs)
	if (locale === "ja") return ja_modpacks_review_published_empty(inputs)
	return en_modpacks_review_published_empty(inputs)
});
