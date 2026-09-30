/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Field_Medic_HintInputs */

const en_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send 10 compatibility reports that match the community consensus.`)
};

const es_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envía 10 reportes de compatibilidad que coincidan con el consenso de la comunidad.`)
};

const de_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sende 10 Kompatibilitätsberichte, die mit dem Konsens der Community übereinstimmen.`)
};

const fr_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyez 10 rapports de compatibilité conformes au consensus de la communauté.`)
};

const it_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia 10 rapporti di compatibilità in linea con il consenso della community.`)
};

const nl_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stuur 10 compatibiliteitsrapporten die overeenkomen met de consensus van de community.`)
};

const pl_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij 10 raportów zgodności zgodnych z konsensusem społeczności.`)
};

const pt_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envie 10 relatórios de compatibilidade que coincidam com o consenso da comunidade.`)
};

const ru_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправьте 10 отчётов о совместимости, совпавших с мнением сообщества.`)
};

const sv_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka 10 kompatibilitetsrapporter som stämmer med gemenskapens konsensus.`)
};

const tr_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topluluk uzlaşısıyla eşleşen 10 uyumluluk raporu gönder.`)
};

const zh_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交 10 份与社区共识一致的兼容性报告。`)
};

const ja_profile_badge_field_medic_hint = /** @type {(inputs: Profile_Badge_Field_Medic_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティの合意と一致する互換性レポートを 10 件送る。`)
};

/**
* | output |
* | --- |
* | "Send 10 compatibility reports that match the community consensus." |
*
* @param {Profile_Badge_Field_Medic_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_field_medic_hint = /** @type {((inputs?: Profile_Badge_Field_Medic_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Field_Medic_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_field_medic_hint(inputs)
	if (locale === "de") return de_profile_badge_field_medic_hint(inputs)
	if (locale === "fr") return fr_profile_badge_field_medic_hint(inputs)
	if (locale === "it") return it_profile_badge_field_medic_hint(inputs)
	if (locale === "nl") return nl_profile_badge_field_medic_hint(inputs)
	if (locale === "pl") return pl_profile_badge_field_medic_hint(inputs)
	if (locale === "pt") return pt_profile_badge_field_medic_hint(inputs)
	if (locale === "ru") return ru_profile_badge_field_medic_hint(inputs)
	if (locale === "sv") return sv_profile_badge_field_medic_hint(inputs)
	if (locale === "tr") return tr_profile_badge_field_medic_hint(inputs)
	if (locale === "zh") return zh_profile_badge_field_medic_hint(inputs)
	if (locale === "ja") return ja_profile_badge_field_medic_hint(inputs)
	return en_profile_badge_field_medic_hint(inputs)
});
