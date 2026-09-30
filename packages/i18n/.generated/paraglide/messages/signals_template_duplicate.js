/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Template_DuplicateInputs */

const en_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This duplicates a mod that is already listed. Publish a new version of it instead.`)
};

const es_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplica un mod que ya está publicado. Publica una versión nueva de ese mod.`)
};

const de_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das dupliziert einen bereits gelisteten Mod. Veröffentliche stattdessen eine neue Version davon.`)
};

const fr_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cela duplique un mod déjà publié. Publiez plutôt une nouvelle version de celui-ci.`)
};

const it_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplica una mod già pubblicata. Pubblica invece una nuova versione di quella.`)
};

const nl_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit dupliceert een mod die al in de lijst staat. Publiceer in plaats daarvan een nieuwe versie ervan.`)
};

const pl_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To duplikuje mod, który już jest na liście. Zamiast tego opublikuj jego nową wersję.`)
};

const pt_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isto duplica um mod que já está publicado. Publique uma nova versão dele.`)
};

const ru_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это дубликат уже опубликованного мода. Опубликуйте вместо этого его новую версию.`)
};

const sv_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här dubblerar en modd som redan finns. Publicera en ny version av den i stället.`)
};

const tr_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu, zaten listelenmiş bir modun kopyası. Bunun yerine onun yeni bir sürümünü yayımlayın.`)
};

const zh_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这与已发布的模组重复。请改为发布该模组的新版本。`)
};

const ja_signals_template_duplicate = /** @type {(inputs: Signals_Template_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すでに公開されているMODと重複しています。代わりにそのMODの新しいバージョンを公開してください。`)
};

/**
* | output |
* | --- |
* | "This duplicates a mod that is already listed. Publish a new version of it instead." |
*
* @param {Signals_Template_DuplicateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_template_duplicate = /** @type {((inputs?: Signals_Template_DuplicateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Template_DuplicateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_template_duplicate(inputs)
	if (locale === "de") return de_signals_template_duplicate(inputs)
	if (locale === "fr") return fr_signals_template_duplicate(inputs)
	if (locale === "it") return it_signals_template_duplicate(inputs)
	if (locale === "nl") return nl_signals_template_duplicate(inputs)
	if (locale === "pl") return pl_signals_template_duplicate(inputs)
	if (locale === "pt") return pt_signals_template_duplicate(inputs)
	if (locale === "ru") return ru_signals_template_duplicate(inputs)
	if (locale === "sv") return sv_signals_template_duplicate(inputs)
	if (locale === "tr") return tr_signals_template_duplicate(inputs)
	if (locale === "zh") return zh_signals_template_duplicate(inputs)
	if (locale === "ja") return ja_signals_template_duplicate(inputs)
	return en_signals_template_duplicate(inputs)
});
