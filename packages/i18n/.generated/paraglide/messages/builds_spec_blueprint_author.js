/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_Blueprint_AuthorInputs */

const en_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Author in file`)
};

const es_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor en el archivo`)
};

const de_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor in der Datei`)
};

const fr_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur dans le fichier`)
};

const it_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autore nel file`)
};

const nl_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur in het bestand`)
};

const pl_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor w pliku`)
};

const pt_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor no arquivo`)
};

const ru_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор в файле`)
};

const sv_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upphovsperson i filen`)
};

const tr_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosyadaki yazar`)
};

const zh_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件中的作者`)
};

const ja_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイル内の作者`)
};

/**
* | output |
* | --- |
* | "Author in file" |
*
* @param {Builds_Spec_Blueprint_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_blueprint_author = /** @type {((inputs?: Builds_Spec_Blueprint_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_Blueprint_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_blueprint_author(inputs)
	if (locale === "de") return de_builds_spec_blueprint_author(inputs)
	if (locale === "fr") return fr_builds_spec_blueprint_author(inputs)
	if (locale === "it") return it_builds_spec_blueprint_author(inputs)
	if (locale === "nl") return nl_builds_spec_blueprint_author(inputs)
	if (locale === "pl") return pl_builds_spec_blueprint_author(inputs)
	if (locale === "pt") return pt_builds_spec_blueprint_author(inputs)
	if (locale === "ru") return ru_builds_spec_blueprint_author(inputs)
	if (locale === "sv") return sv_builds_spec_blueprint_author(inputs)
	if (locale === "tr") return tr_builds_spec_blueprint_author(inputs)
	if (locale === "zh") return zh_builds_spec_blueprint_author(inputs)
	if (locale === "ja") return ja_builds_spec_blueprint_author(inputs)
	return en_builds_spec_blueprint_author(inputs)
});
