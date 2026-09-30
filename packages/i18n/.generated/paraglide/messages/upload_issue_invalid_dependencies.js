/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_DependenciesInputs */

const en_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The dependencies list is invalid.`)
};

const es_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La lista de dependencias no es válida.`)
};

const de_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Liste der Abhängigkeiten ist ungültig.`)
};

const fr_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La liste des dépendances n’est pas valide.`)
};

const it_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’elenco delle dipendenze non è valido.`)
};

const nl_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De lijst met afhankelijkheden is ongeldig.`)
};

const pl_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista zależności jest niepoprawna.`)
};

const pt_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A lista de dependências é inválida.`)
};

const ru_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список зависимостей некорректен.`)
};

const sv_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listan över beroenden är ogiltig.`)
};

const tr_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılık listesi geçersiz.`)
};

const zh_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依赖列表无效。`)
};

const ja_upload_issue_invalid_dependencies = /** @type {(inputs: Upload_Issue_Invalid_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依存関係のリストが無効です。`)
};

/**
* | output |
* | --- |
* | "The dependencies list is invalid." |
*
* @param {Upload_Issue_Invalid_DependenciesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_dependencies = /** @type {((inputs?: Upload_Issue_Invalid_DependenciesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_DependenciesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_dependencies(inputs)
	if (locale === "de") return de_upload_issue_invalid_dependencies(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_dependencies(inputs)
	if (locale === "it") return it_upload_issue_invalid_dependencies(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_dependencies(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_dependencies(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_dependencies(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_dependencies(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_dependencies(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_dependencies(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_dependencies(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_dependencies(inputs)
	return en_upload_issue_invalid_dependencies(inputs)
});
