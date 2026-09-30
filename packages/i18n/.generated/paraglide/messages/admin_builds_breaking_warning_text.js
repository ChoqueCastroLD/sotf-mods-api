/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Breaking_Warning_TextInputs */

const en_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving a breaking build shows the patch banner, signals every creator and marks older mods as possibly outdated.`)
};

const es_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al guardar una build que rompe mods se muestra el banner del parche, se avisa a todos los creadores y los mods anteriores se marcan como posiblemente desactualizados.`)
};

const de_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein inkompatibler Build zeigt das Patch-Banner, benachrichtigt alle Ersteller und markiert ältere Mods als möglicherweise veraltet.`)
};

const fr_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer un build qui casse les mods affiche la bannière du patch, prévient tous les créateurs et marque les anciens mods comme peut-être obsolètes.`)
};

const it_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvando una build che rompe le mod compare il banner della patch, tutti i creatori vengono avvisati e le mod più vecchie risultano forse non aggiornate.`)
};

const nl_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een build die mods breekt opslaan toont de patchbanner, stuurt alle makers een signaal en markeert oudere mods als mogelijk verouderd.`)
};

const pl_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisanie buildu psującego mody pokazuje baner łatki, powiadamia wszystkich twórców i oznacza starsze mody jako możliwie nieaktualne.`)
};

const pt_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar um build que quebra mods mostra o banner do patch, avisa todos os criadores e marca mods antigos como possivelmente desatualizados.`)
};

const ru_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`После сохранения ломающей сборки появится баннер патча, все авторы получат сигнал, а старые моды будут помечены как, возможно, устаревшие.`)
};

const sv_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Att spara ett bygge som bryter moddar visar patchbannern, signalerar alla skapare och markerar äldre moddar som möjligen inaktuella.`)
};

const tr_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozan bir sürümü kaydetmek yama afişini gösterir, tüm yaratıcılara sinyal gönderir ve eski modları muhtemelen güncel değil olarak işaretler.`)
};

const zh_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存破坏性版本会显示补丁横幅，通知所有创作者，并把较旧的模组标记为可能过时。`)
};

const ja_admin_builds_breaking_warning_text = /** @type {(inputs: Admin_Builds_Breaking_Warning_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破壊的なビルドを保存するとパッチのバナーが表示され、すべてのクリエイターに通知され、古い MOD は「古い可能性あり」になります。`)
};

/**
* | output |
* | --- |
* | "Saving a breaking build shows the patch banner, signals every creator and marks older mods as possibly outdated." |
*
* @param {Admin_Builds_Breaking_Warning_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_breaking_warning_text = /** @type {((inputs?: Admin_Builds_Breaking_Warning_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Breaking_Warning_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_breaking_warning_text(inputs)
	if (locale === "de") return de_admin_builds_breaking_warning_text(inputs)
	if (locale === "fr") return fr_admin_builds_breaking_warning_text(inputs)
	if (locale === "it") return it_admin_builds_breaking_warning_text(inputs)
	if (locale === "nl") return nl_admin_builds_breaking_warning_text(inputs)
	if (locale === "pl") return pl_admin_builds_breaking_warning_text(inputs)
	if (locale === "pt") return pt_admin_builds_breaking_warning_text(inputs)
	if (locale === "ru") return ru_admin_builds_breaking_warning_text(inputs)
	if (locale === "sv") return sv_admin_builds_breaking_warning_text(inputs)
	if (locale === "tr") return tr_admin_builds_breaking_warning_text(inputs)
	if (locale === "zh") return zh_admin_builds_breaking_warning_text(inputs)
	if (locale === "ja") return ja_admin_builds_breaking_warning_text(inputs)
	return en_admin_builds_breaking_warning_text(inputs)
});
