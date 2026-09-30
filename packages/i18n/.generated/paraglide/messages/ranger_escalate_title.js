/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Escalate_TitleInputs */

const en_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalate to the admins`)
};

const es_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalar a los administradores`)
};

const de_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An die Admins eskalieren`)
};

const fr_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalader aux admins`)
};

const it_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inoltra agli amministratori`)
};

const nl_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escaleren naar de beheerders`)
};

const pl_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskaluj do administratorów`)
};

const pt_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalar para os administradores`)
};

const ru_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Передать администраторам`)
};

const sv_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalera till administratörerna`)
};

const tr_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yöneticilere yükselt`)
};

const zh_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上报给管理员`)
};

const ja_ranger_escalate_title = /** @type {(inputs: Ranger_Escalate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理者にエスカレーション`)
};

/**
* | output |
* | --- |
* | "Escalate to the admins" |
*
* @param {Ranger_Escalate_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_escalate_title = /** @type {((inputs?: Ranger_Escalate_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Escalate_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_escalate_title(inputs)
	if (locale === "de") return de_ranger_escalate_title(inputs)
	if (locale === "fr") return fr_ranger_escalate_title(inputs)
	if (locale === "it") return it_ranger_escalate_title(inputs)
	if (locale === "nl") return nl_ranger_escalate_title(inputs)
	if (locale === "pl") return pl_ranger_escalate_title(inputs)
	if (locale === "pt") return pt_ranger_escalate_title(inputs)
	if (locale === "ru") return ru_ranger_escalate_title(inputs)
	if (locale === "sv") return sv_ranger_escalate_title(inputs)
	if (locale === "tr") return tr_ranger_escalate_title(inputs)
	if (locale === "zh") return zh_ranger_escalate_title(inputs)
	if (locale === "ja") return ja_ranger_escalate_title(inputs)
	return en_ranger_escalate_title(inputs)
});
