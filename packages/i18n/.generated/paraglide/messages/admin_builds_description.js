/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_DescriptionInputs */

const en_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Sons of the Forest patches that field reports, compatibility badges and the Patch Radar refer to. Exactly one is current.`)
};

const es_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los parches de Sons of the Forest a los que se refieren los reportes de campo, las insignias de compatibilidad y el Radar de parches. Exactamente una es la actual.`)
};

const de_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Patches von Sons of the Forest, auf die sich Feldberichte, Kompatibilitätsabzeichen und das Patch-Radar beziehen. Genau einer ist aktuell.`)
};

const fr_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les patchs de Sons of the Forest auxquels se rapportent les rapports de terrain, les badges de compatibilité et le Radar des patchs. Un seul est actuel.`)
};

const it_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le patch di Sons of the Forest a cui si riferiscono i rapporti sul campo, i badge di compatibilità e il Radar delle patch. Esattamente una è quella attuale.`)
};

const nl_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De patches van Sons of the Forest waar veldrapporten, compatibiliteitsbadges en de Patchradar naar verwijzen. Precies één is de huidige.`)
};

const pl_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Łatki Sons of the Forest, do których odnoszą się raporty terenowe, odznaki zgodności i Radar patchy. Dokładnie jedna jest aktualna.`)
};

const pt_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os patches de Sons of the Forest a que se referem os relatórios de campo, os selos de compatibilidade e o Radar de patches. Exatamente um é o atual.`)
};

const ru_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Патчи Sons of the Forest, к которым относятся полевые отчёты, значки совместимости и Радар патчей. Текущая — ровно одна.`)
};

const sv_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patcharna till Sons of the Forest som fältrapporter, kompatibilitetsmärken och Patchradarn hänvisar till. Exakt en är aktuell.`)
};

const tr_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporlarının, uyumluluk rozetlerinin ve Yama Radarı’nın dayandığı Sons of the Forest yamaları. Tam olarak biri günceldir.`)
};

const zh_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实地报告、兼容性徽章和补丁雷达所依据的《森林之子》补丁。有且只有一个是当前版本。`)
};

const ja_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポート、互換性バッジ、パッチレーダーが参照する Sons of the Forest のパッチです。現在のビルドは必ず 1 つです。`)
};

/**
* | output |
* | --- |
* | "The Sons of the Forest patches that field reports, compatibility badges and the Patch Radar refer to. Exactly one is current." |
*
* @param {Admin_Builds_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_description = /** @type {((inputs?: Admin_Builds_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_description(inputs)
	if (locale === "de") return de_admin_builds_description(inputs)
	if (locale === "fr") return fr_admin_builds_description(inputs)
	if (locale === "it") return it_admin_builds_description(inputs)
	if (locale === "nl") return nl_admin_builds_description(inputs)
	if (locale === "pl") return pl_admin_builds_description(inputs)
	if (locale === "pt") return pt_admin_builds_description(inputs)
	if (locale === "ru") return ru_admin_builds_description(inputs)
	if (locale === "sv") return sv_admin_builds_description(inputs)
	if (locale === "tr") return tr_admin_builds_description(inputs)
	if (locale === "zh") return zh_admin_builds_description(inputs)
	if (locale === "ja") return ja_admin_builds_description(inputs)
	return en_admin_builds_description(inputs)
});
