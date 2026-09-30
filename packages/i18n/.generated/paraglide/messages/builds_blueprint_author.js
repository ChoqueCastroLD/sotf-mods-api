/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ author: NonNullable<unknown> }} Builds_Blueprint_AuthorInputs */

const en_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Author in the blueprint: ${i?.author}`)
};

const es_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor en el plano: ${i?.author}`)
};

const de_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor im Bauplan: ${i?.author}`)
};

const fr_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Auteur dans le plan : ${i?.author}`)
};

const it_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autore nel progetto: ${i?.author}`)
};

const nl_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Auteur in de bouwtekening: ${i?.author}`)
};

const pl_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor w planie: ${i?.author}`)
};

const pt_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor na planta: ${i?.author}`)
};

const ru_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Автор в чертеже: ${i?.author}`)
};

const sv_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upphovsperson i ritningen: ${i?.author}`)
};

const tr_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Plandaki yazar: ${i?.author}`)
};

const zh_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`蓝图中的作者：${i?.author}`)
};

const ja_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`設計図内の作者：${i?.author}`)
};

/**
* | output |
* | --- |
* | "Author in the blueprint: {author}" |
*
* @param {Builds_Blueprint_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_blueprint_author = /** @type {((inputs: Builds_Blueprint_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Blueprint_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_blueprint_author(inputs)
	if (locale === "de") return de_builds_blueprint_author(inputs)
	if (locale === "fr") return fr_builds_blueprint_author(inputs)
	if (locale === "it") return it_builds_blueprint_author(inputs)
	if (locale === "nl") return nl_builds_blueprint_author(inputs)
	if (locale === "pl") return pl_builds_blueprint_author(inputs)
	if (locale === "pt") return pt_builds_blueprint_author(inputs)
	if (locale === "ru") return ru_builds_blueprint_author(inputs)
	if (locale === "sv") return sv_builds_blueprint_author(inputs)
	if (locale === "tr") return tr_builds_blueprint_author(inputs)
	if (locale === "zh") return zh_builds_blueprint_author(inputs)
	if (locale === "ja") return ja_builds_blueprint_author(inputs)
	return en_builds_blueprint_author(inputs)
});
