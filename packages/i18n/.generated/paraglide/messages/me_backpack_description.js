/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_DescriptionInputs */

const en_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods you follow, with their latest updates.`)
};

const es_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mods que sigues, con sus últimas actualizaciones.`)
};

const de_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Mods, denen du folgst, mit ihren neuesten Updates.`)
};

const fr_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les mods que vous suivez, avec leurs dernières mises à jour.`)
};

const it_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod che segui, con i loro ultimi aggiornamenti.`)
};

const nl_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mods die je volgt, met hun laatste updates.`)
};

const pl_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody, które obserwujesz, z ich najnowszymi aktualizacjami.`)
};

const pt_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os mods que você segue, com as atualizações mais recentes.`)
};

const ru_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды, на которые вы подписаны, с их последними обновлениями.`)
};

const sv_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddarna du följer, med deras senaste uppdateringar.`)
};

const tr_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ettiğin modlar ve en son güncellemeleri.`)
};

const zh_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你关注的模组及其最新更新。`)
};

const ja_me_backpack_description = /** @type {(inputs: Me_Backpack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中のMODと、その最新のアップデート。`)
};

/**
* | output |
* | --- |
* | "Mods you follow, with their latest updates." |
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
