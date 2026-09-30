/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Template_ManageInputs */

const en_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage saved replies`)
};

const es_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestionar respuestas guardadas`)
};

const de_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gespeicherte Antworten verwalten`)
};

const fr_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gérer les réponses enregistrées`)
};

const it_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestisci le risposte salvate`)
};

const nl_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgeslagen antwoorden beheren`)
};

const pl_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarządzaj zapisanymi odpowiedziami`)
};

const pt_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerenciar respostas salvas`)
};

const ru_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Управлять сохранёнными ответами`)
};

const sv_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hantera sparade svar`)
};

const tr_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıtlı yanıtları yönet`)
};

const zh_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理已保存的回复`)
};

const ja_basecamp_inbox_template_manage = /** @type {(inputs: Basecamp_Inbox_Template_ManageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存した返信を管理`)
};

/**
* | output |
* | --- |
* | "Manage saved replies" |
*
* @param {Basecamp_Inbox_Template_ManageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_template_manage = /** @type {((inputs?: Basecamp_Inbox_Template_ManageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Template_ManageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_template_manage(inputs)
	if (locale === "de") return de_basecamp_inbox_template_manage(inputs)
	if (locale === "fr") return fr_basecamp_inbox_template_manage(inputs)
	if (locale === "it") return it_basecamp_inbox_template_manage(inputs)
	if (locale === "nl") return nl_basecamp_inbox_template_manage(inputs)
	if (locale === "pl") return pl_basecamp_inbox_template_manage(inputs)
	if (locale === "pt") return pt_basecamp_inbox_template_manage(inputs)
	if (locale === "ru") return ru_basecamp_inbox_template_manage(inputs)
	if (locale === "sv") return sv_basecamp_inbox_template_manage(inputs)
	if (locale === "tr") return tr_basecamp_inbox_template_manage(inputs)
	if (locale === "zh") return zh_basecamp_inbox_template_manage(inputs)
	if (locale === "ja") return ja_basecamp_inbox_template_manage(inputs)
	return en_basecamp_inbox_template_manage(inputs)
});
