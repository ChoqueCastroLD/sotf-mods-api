/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_Blueprint_AuthorInputs */

const en_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blueprint author`)
};

const es_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor del plano`)
};

const de_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor des Bauplans`)
};

const fr_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur du plan`)
};

const it_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autore del progetto`)
};

const nl_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur van de bouwtekening`)
};

const pl_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor planu`)
};

const pt_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor da planta`)
};

const ru_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор чертежа`)
};

const sv_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritningens upphovsperson`)
};

const tr_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planın yazarı`)
};

const zh_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`蓝图作者`)
};

const ja_builds_spec_blueprint_author = /** @type {(inputs: Builds_Spec_Blueprint_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設計図の作者`)
};

/**
* | output |
* | --- |
* | "Blueprint author" |
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
