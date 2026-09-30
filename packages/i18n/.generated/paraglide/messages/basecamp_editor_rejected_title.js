/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_Rejected_TitleInputs */

const en_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changes requested`)
};

const es_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambios pedidos`)
};

const de_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen erbeten`)
};

const fr_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifications demandées`)
};

const it_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifiche richieste`)
};

const nl_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen gevraagd`)
};

const pl_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poproszono o zmiany`)
};

const pt_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterações pedidas`)
};

const ru_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужны изменения`)
};

const sv_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringar begärda`)
};

const tr_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik istendi`)
};

const zh_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要修改`)
};

const ja_basecamp_editor_rejected_title = /** @type {(inputs: Basecamp_Editor_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修正依頼`)
};

/**
* | output |
* | --- |
* | "Changes requested" |
*
* @param {Basecamp_Editor_Rejected_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_rejected_title = /** @type {((inputs?: Basecamp_Editor_Rejected_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Rejected_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_rejected_title(inputs)
	if (locale === "de") return de_basecamp_editor_rejected_title(inputs)
	if (locale === "fr") return fr_basecamp_editor_rejected_title(inputs)
	if (locale === "it") return it_basecamp_editor_rejected_title(inputs)
	if (locale === "nl") return nl_basecamp_editor_rejected_title(inputs)
	if (locale === "pl") return pl_basecamp_editor_rejected_title(inputs)
	if (locale === "pt") return pt_basecamp_editor_rejected_title(inputs)
	if (locale === "ru") return ru_basecamp_editor_rejected_title(inputs)
	if (locale === "sv") return sv_basecamp_editor_rejected_title(inputs)
	if (locale === "tr") return tr_basecamp_editor_rejected_title(inputs)
	if (locale === "zh") return zh_basecamp_editor_rejected_title(inputs)
	if (locale === "ja") return ja_basecamp_editor_rejected_title(inputs)
	return en_basecamp_editor_rejected_title(inputs)
});
