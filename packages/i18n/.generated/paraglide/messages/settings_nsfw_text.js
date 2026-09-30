/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nsfw_TextInputs */

const en_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods marked as NSFW are hidden from lists, search and feeds, and blurred everywhere except their own page. Turn this on to see them.`)
};

const es_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mods marcados como NSFW están ocultos en listados, búsquedas y feeds, y difuminados en todas partes salvo en su propia página. Actívalo para verlos.`)
};

const de_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als NSFW markierte Mods sind in Listen, Suche und Feeds ausgeblendet und überall außer auf ihrer eigenen Seite unscharf. Schalte dies ein, um sie zu sehen.`)
};

const fr_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les mods marqués NSFW sont masqués dans les listes, la recherche et les flux, et floutés partout sauf sur leur propre page. Activez cette option pour les voir.`)
};

const it_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod contrassegnate come NSFW sono nascoste da elenchi, ricerca e feed, e sfocate ovunque tranne che nella loro pagina. Attiva questa opzione per vederle.`)
};

const nl_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als NSFW gemarkeerde mods zijn verborgen in lijsten, zoekresultaten en feeds, en overal vervaagd behalve op hun eigen pagina. Zet dit aan om ze te zien.`)
};

const pl_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody oznaczone jako NSFW są ukryte na listach, w wyszukiwarce i kanałach oraz rozmyte wszędzie poza własną stroną. Włącz tę opcję, aby je widzieć.`)
};

const pt_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods marcados como NSFW ficam ocultos em listas, buscas e feeds, e desfocados em todo lugar exceto na própria página. Ative para vê-los.`)
};

const ru_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды с пометкой NSFW скрыты в списках, поиске и лентах и размыты везде, кроме собственной страницы. Включите, чтобы их видеть.`)
};

const sv_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar märkta NSFW är dolda i listor, sök och flöden och suddas ut överallt utom på sin egen sida. Slå på det här för att se dem.`)
};

const tr_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW olarak işaretlenen modlar listelerde, aramada ve akışlarda gizlenir; kendi sayfaları dışında her yerde bulanıklaştırılır. Görmek için bunu aç.`)
};

const zh_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标记为 NSFW 的模组会在列表、搜索和订阅源中隐藏，并在其自身页面以外的地方模糊显示。开启后即可查看。`)
};

const ja_settings_nsfw_text = /** @type {(inputs: Settings_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW に指定されたMODは一覧、検索、フィードで非表示になり、自身のページ以外ではぼかして表示されます。表示するにはオンにしてください。`)
};

/**
* | output |
* | --- |
* | "Mods marked as NSFW are hidden from lists, search and feeds, and blurred everywhere except their own page. Turn this on to see them." |
*
* @param {Settings_Nsfw_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_nsfw_text = /** @type {((inputs?: Settings_Nsfw_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_nsfw_text(inputs)
	if (locale === "de") return de_settings_nsfw_text(inputs)
	if (locale === "fr") return fr_settings_nsfw_text(inputs)
	if (locale === "it") return it_settings_nsfw_text(inputs)
	if (locale === "nl") return nl_settings_nsfw_text(inputs)
	if (locale === "pl") return pl_settings_nsfw_text(inputs)
	if (locale === "pt") return pt_settings_nsfw_text(inputs)
	if (locale === "ru") return ru_settings_nsfw_text(inputs)
	if (locale === "sv") return sv_settings_nsfw_text(inputs)
	if (locale === "tr") return tr_settings_nsfw_text(inputs)
	if (locale === "zh") return zh_settings_nsfw_text(inputs)
	if (locale === "ja") return ja_settings_nsfw_text(inputs)
	return en_settings_nsfw_text(inputs)
});
