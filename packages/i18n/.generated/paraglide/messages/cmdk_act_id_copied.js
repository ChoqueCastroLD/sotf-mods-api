/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ id: NonNullable<unknown> }} Cmdk_Act_Id_CopiedInputs */

const en_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ID copied: ${i?.id}`)
};

const es_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ID copiado: ${i?.id}`)
};

const de_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ID kopiert: ${i?.id}`)
};

const fr_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ID copié : ${i?.id}`)
};

const it_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ID copiato: ${i?.id}`)
};

const nl_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ID gekopieerd: ${i?.id}`)
};

const pl_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skopiowano ID: ${i?.id}`)
};

const pt_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ID copiado: ${i?.id}`)
};

const ru_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ID скопирован: ${i?.id}`)
};

const sv_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ID kopierat: ${i?.id}`)
};

const tr_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kimlik kopyalandı: ${i?.id}`)
};

const zh_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已复制 ID：${i?.id}`)
};

const ja_cmdk_act_id_copied = /** @type {(inputs: Cmdk_Act_Id_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ID をコピーしました: ${i?.id}`)
};

/**
* | output |
* | --- |
* | "ID copied: {id}" |
*
* @param {Cmdk_Act_Id_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_id_copied = /** @type {((inputs: Cmdk_Act_Id_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_Id_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_id_copied(inputs)
	if (locale === "de") return de_cmdk_act_id_copied(inputs)
	if (locale === "fr") return fr_cmdk_act_id_copied(inputs)
	if (locale === "it") return it_cmdk_act_id_copied(inputs)
	if (locale === "nl") return nl_cmdk_act_id_copied(inputs)
	if (locale === "pl") return pl_cmdk_act_id_copied(inputs)
	if (locale === "pt") return pt_cmdk_act_id_copied(inputs)
	if (locale === "ru") return ru_cmdk_act_id_copied(inputs)
	if (locale === "sv") return sv_cmdk_act_id_copied(inputs)
	if (locale === "tr") return tr_cmdk_act_id_copied(inputs)
	if (locale === "zh") return zh_cmdk_act_id_copied(inputs)
	if (locale === "ja") return ja_cmdk_act_id_copied(inputs)
	return en_cmdk_act_id_copied(inputs)
});
