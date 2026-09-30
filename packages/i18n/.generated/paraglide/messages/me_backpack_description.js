/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_DescriptionInputs */

const en_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods you follow, with their updates and how they run on the current build.`)
};

const es_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mods que sigues, con sus actualizaciones y cómo funcionan en la build actual.`)
};

const de_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Mods, denen du folgst, mit ihren Updates und wie sie auf dem aktuellen Build laufen.`)
};

const fr_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les mods que vous suivez, avec leurs mises à jour et leur fonctionnement sur la build actuelle.`)
};

const it_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod che segui, con i loro aggiornamenti e come funzionano sulla build attuale.`)
};

const nl_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mods die je volgt, met hun updates en hoe ze werken op de huidige build.`)
};

const pl_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody, które obserwujesz, z ich aktualizacjami i działaniem na bieżącym buildzie.`)
};

const pt_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os mods que você segue, com suas atualizações e como funcionam na build atual.`)
};

const ru_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды, на которые вы подписаны, с их обновлениями и работой на текущей сборке.`)
};

const sv_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddarna du följer, med deras uppdateringar och hur de fungerar på det aktuella bygget.`)
};

const tr_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ettiğin modlar, güncellemeleri ve güncel sürümde nasıl çalıştıkları.`)
};

const zh_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你关注的模组，以及它们的更新和在当前版本上的运行情况。`)
};

const ja_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中のMODと、そのアップデート、現在のビルドでの動作状況。`)
};

/**
* | output |
* | --- |
* | "Mods you follow, with their updates and how they run on the current build." |
*
* @param {Me_Backpack_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_description = /** @type {((inputs?: Me_Backpack_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_description(inputs)
	if (locale === "de") return de_me_backpack_description(inputs)
	if (locale === "fr") return fr_me_backpack_description(inputs)
	if (locale === "it") return it_me_backpack_description(inputs)
	if (locale === "nl") return nl_me_backpack_description(inputs)
	if (locale === "pl") return pl_me_backpack_description(inputs)
	if (locale === "pt") return pt_me_backpack_description(inputs)
	if (locale === "ru") return ru_me_backpack_description(inputs)
	if (locale === "sv") return sv_me_backpack_description(inputs)
	if (locale === "tr") return tr_me_backpack_description(inputs)
	if (locale === "zh") return zh_me_backpack_description(inputs)
	if (locale === "ja") return ja_me_backpack_description(inputs)
	return en_me_backpack_description(inputs)
});
