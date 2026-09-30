/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_ArchivedInputs */

const en_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kept for reference: marked as archived and hidden from lists.`)
};

const es_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se conserva como referencia: marcado como archivado y oculto en las listas.`)
};

const de_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als Referenz aufbewahrt: als archiviert markiert und in Listen ausgeblendet.`)
};

const fr_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conservé pour référence : marqué comme archivé et masqué des listes.`)
};

const it_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conservata come riferimento: segnata come archiviata e nascosta dagli elenchi.`)
};

const nl_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewaard als referentie: gemarkeerd als gearchiveerd en verborgen in lijsten.`)
};

const pl_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zachowany dla porządku: oznaczony jako zarchiwizowany i ukryty na listach.`)
};

const pt_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mantido como referência: marcado como arquivado e oculto nas listas.`)
};

const ru_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранён для истории: отмечен как архивный и скрыт из списков.`)
};

const sv_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparad som referens: markerad som arkiverad och dold i listor.`)
};

const tr_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıt için saklanıyor: arşivlenmiş olarak işaretli ve listelerde gizli.`)
};

const zh_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`留作参考：已标记为归档，并从列表中隐藏。`)
};

const ja_basecamp_settings_archived = /** @type {(inputs: Basecamp_Settings_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`記録として保存：アーカイブ済みとして一覧から非表示です。`)
};

/**
* | output |
* | --- |
* | "Kept for reference: marked as archived and hidden from lists." |
*
* @param {Basecamp_Settings_ArchivedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_archived = /** @type {((inputs?: Basecamp_Settings_ArchivedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_ArchivedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_archived(inputs)
	if (locale === "de") return de_basecamp_settings_archived(inputs)
	if (locale === "fr") return fr_basecamp_settings_archived(inputs)
	if (locale === "it") return it_basecamp_settings_archived(inputs)
	if (locale === "nl") return nl_basecamp_settings_archived(inputs)
	if (locale === "pl") return pl_basecamp_settings_archived(inputs)
	if (locale === "pt") return pt_basecamp_settings_archived(inputs)
	if (locale === "ru") return ru_basecamp_settings_archived(inputs)
	if (locale === "sv") return sv_basecamp_settings_archived(inputs)
	if (locale === "tr") return tr_basecamp_settings_archived(inputs)
	if (locale === "zh") return zh_basecamp_settings_archived(inputs)
	if (locale === "ja") return ja_basecamp_settings_archived(inputs)
	return en_basecamp_settings_archived(inputs)
});
