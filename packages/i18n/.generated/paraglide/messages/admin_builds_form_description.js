/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Form_DescriptionInputs */

const en_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Label as players say it (“1.0.4”, “Patch 13”).`)
};

const es_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiqueta como la dicen los jugadores («1.0.4», «Parche 13»).`)
};

const de_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezeichnung so, wie Spieler sie nennen („1.0.4“, „Patch 13“).`)
};

const fr_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libellé tel que les joueurs le disent (« 1.0.4 », « Patch 13 »).`)
};

const it_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etichetta come la chiamano i giocatori («1.0.4», «Patch 13»).`)
};

const nl_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Label zoals spelers het noemen (‘1.0.4’, ‘Patch 13’).`)
};

const pl_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etykieta tak, jak mówią gracze („1.0.4”, „Łatka 13”).`)
};

const pt_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rótulo como os jogadores falam (“1.0.4”, “Patch 13”).`)
};

const ru_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название так, как его называют игроки («1.0.4», «Патч 13»).`)
};

const sv_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etikett som spelarna säger den (”1.0.4”, ”Patch 13”).`)
};

const tr_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncuların söylediği gibi etiket (“1.0.4”, “Yama 13”).`)
};

const zh_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按玩家的叫法填写标签（“1.0.4”、“补丁 13”）。`)
};

const ja_admin_builds_form_description = /** @type {(inputs: Admin_Builds_Form_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーが呼ぶとおりのラベル（「1.0.4」「パッチ 13」など）。`)
};

/**
* | output |
* | --- |
* | "Label as players say it (“1.0.4”, “Patch 13”)." |
*
* @param {Admin_Builds_Form_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_form_description = /** @type {((inputs?: Admin_Builds_Form_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Form_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_form_description(inputs)
	if (locale === "de") return de_admin_builds_form_description(inputs)
	if (locale === "fr") return fr_admin_builds_form_description(inputs)
	if (locale === "it") return it_admin_builds_form_description(inputs)
	if (locale === "nl") return nl_admin_builds_form_description(inputs)
	if (locale === "pl") return pl_admin_builds_form_description(inputs)
	if (locale === "pt") return pt_admin_builds_form_description(inputs)
	if (locale === "ru") return ru_admin_builds_form_description(inputs)
	if (locale === "sv") return sv_admin_builds_form_description(inputs)
	if (locale === "tr") return tr_admin_builds_form_description(inputs)
	if (locale === "zh") return zh_admin_builds_form_description(inputs)
	if (locale === "ja") return ja_admin_builds_form_description(inputs)
	return en_admin_builds_form_description(inputs)
});
