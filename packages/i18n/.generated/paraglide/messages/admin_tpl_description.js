/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_DescriptionInputs */

const en_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The reasons rangers pick when they approve, reject or ask for changes. Authors read them in their language.`)
};

const es_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los motivos que eligen los rangers al aprobar, rechazar o pedir cambios. Los autores los leen en su idioma.`)
};

const de_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Begründungen, die Ranger beim Freigeben, Ablehnen oder Anfordern von Änderungen wählen. Autoren lesen sie in ihrer Sprache.`)
};

const fr_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les motifs que choisissent les rangers pour approuver, refuser ou demander des changements. Les auteurs les lisent dans leur langue.`)
};

const it_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I motivi che i ranger scelgono quando approvano, rifiutano o chiedono modifiche. Gli autori li leggono nella loro lingua.`)
};

const nl_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De redenen die rangers kiezen bij goedkeuren, afwijzen of wijzigingen vragen. Auteurs lezen ze in hun eigen taal.`)
};

const pl_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powody, które rangerzy wybierają przy zatwierdzaniu, odrzucaniu lub prośbie o zmiany. Autorzy czytają je w swoim języku.`)
};

const pt_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os motivos que os rangers escolhem ao aprovar, rejeitar ou pedir alterações. Os autores os leem no próprio idioma.`)
};

const ru_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Причины, которые рейнджеры выбирают при одобрении, отклонении или запросе правок. Авторы читают их на своём языке.`)
};

const sv_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skälen rangers väljer när de godkänner, avvisar eller begär ändringar. Skaparna läser dem på sitt eget språk.`)
};

const tr_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucuların onaylarken, reddederken veya değişiklik isterken seçtiği gerekçeler. Yazarlar bunları kendi dillerinde okur.`)
};

const zh_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`巡查员在批准、拒绝或要求修改时选用的理由。作者会以自己的语言看到它们。`)
};

const ja_admin_tpl_description = /** @type {(inputs: Admin_Tpl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーが承認、却下、修正依頼のときに選ぶ理由です。作者は自分の言語で読みます。`)
};

/**
* | output |
* | --- |
* | "The reasons rangers pick when they approve, reject or ask for changes. Authors read them in their language." |
*
* @param {Admin_Tpl_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_description = /** @type {((inputs?: Admin_Tpl_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_description(inputs)
	if (locale === "de") return de_admin_tpl_description(inputs)
	if (locale === "fr") return fr_admin_tpl_description(inputs)
	if (locale === "it") return it_admin_tpl_description(inputs)
	if (locale === "nl") return nl_admin_tpl_description(inputs)
	if (locale === "pl") return pl_admin_tpl_description(inputs)
	if (locale === "pt") return pt_admin_tpl_description(inputs)
	if (locale === "ru") return ru_admin_tpl_description(inputs)
	if (locale === "sv") return sv_admin_tpl_description(inputs)
	if (locale === "tr") return tr_admin_tpl_description(inputs)
	if (locale === "zh") return zh_admin_tpl_description(inputs)
	if (locale === "ja") return ja_admin_tpl_description(inputs)
	return en_admin_tpl_description(inputs)
});
