/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Action_ViewInputs */

const en_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View public page`)
};

const es_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver la página pública`)
};

const de_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffentliche Seite ansehen`)
};

const fr_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir la page publique`)
};

const it_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi la pagina pubblica`)
};

const nl_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Openbare pagina bekijken`)
};

const pl_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz stronę publiczną`)
};

const pt_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver a página pública`)
};

const ru_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть публичную страницу`)
};

const sv_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa den offentliga sidan`)
};

const tr_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık sayfayı gör`)
};

const zh_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看公开页面`)
};

const ja_basecamp_mods_action_view = /** @type {(inputs: Basecamp_Mods_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開ページを見る`)
};

/**
* | output |
* | --- |
* | "View public page" |
*
* @param {Basecamp_Mods_Action_ViewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_action_view = /** @type {((inputs?: Basecamp_Mods_Action_ViewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Action_ViewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_action_view(inputs)
	if (locale === "de") return de_basecamp_mods_action_view(inputs)
	if (locale === "fr") return fr_basecamp_mods_action_view(inputs)
	if (locale === "it") return it_basecamp_mods_action_view(inputs)
	if (locale === "nl") return nl_basecamp_mods_action_view(inputs)
	if (locale === "pl") return pl_basecamp_mods_action_view(inputs)
	if (locale === "pt") return pt_basecamp_mods_action_view(inputs)
	if (locale === "ru") return ru_basecamp_mods_action_view(inputs)
	if (locale === "sv") return sv_basecamp_mods_action_view(inputs)
	if (locale === "tr") return tr_basecamp_mods_action_view(inputs)
	if (locale === "zh") return zh_basecamp_mods_action_view(inputs)
	if (locale === "ja") return ja_basecamp_mods_action_view(inputs)
	return en_basecamp_mods_action_view(inputs)
});
