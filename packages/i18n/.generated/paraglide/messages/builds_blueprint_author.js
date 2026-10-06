/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ author: NonNullable<unknown> }} Builds_Blueprint_AuthorInputs */

const en_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Author in the build file: ${i?.author}`)
};

const es_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor en el archivo de la build: ${i?.author}`)
};

const de_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor in der Build-Datei: ${i?.author}`)
};

const fr_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Auteur dans le fichier de la build : ${i?.author}`)
};

const it_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autore nel file della build: ${i?.author}`)
};

const nl_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Auteur in het buildbestand: ${i?.author}`)
};

const pl_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor w pliku builda: ${i?.author}`)
};

const pt_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor no arquivo da build: ${i?.author}`)
};

const ru_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Автор в файле постройки: ${i?.author}`)
};

const sv_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upphovsperson i byggfilen: ${i?.author}`)
};

const tr_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yapı dosyasındaki yazar: ${i?.author}`)
};

const zh_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`文件中的作者：${i?.author}`)
};

const ja_builds_blueprint_author = /** @type {(inputs: Builds_Blueprint_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ファイル内の作者：${i?.author}`)
};

/**
* | output |
* | --- |
* | "Author in the build file: {author}" |
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
