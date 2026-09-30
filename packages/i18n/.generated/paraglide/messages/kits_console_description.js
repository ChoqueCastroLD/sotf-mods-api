/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Console_DescriptionInputs */

const en_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collections of mods you curate: public, shared by link or just for you.`)
};

const es_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colecciones de mods que tú seleccionas: públicas, compartidas por enlace o solo para ti.`)
};

const de_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Sammlungen, die du zusammenstellst: öffentlich, per Link geteilt oder nur für dich.`)
};

const fr_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les collections de mods que vous composez : publiques, partagées par lien ou rien que pour vous.`)
};

const it_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raccolte di mod curate da te: pubbliche, condivise tramite link o solo per te.`)
};

const nl_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modcollecties die je zelf samenstelt: openbaar, gedeeld via een link of alleen voor jou.`)
};

const pl_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolekcje modów, które sam układasz: publiczne, udostępniane linkiem lub tylko dla ciebie.`)
};

const pt_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coleções de mods que você monta: públicas, compartilhadas por link ou só para você.`)
};

const ru_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подборки модов, которые вы собираете: публичные, по ссылке или только для вас.`)
};

const sv_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samlingar av moddar som du sätter ihop: offentliga, delade via länk eller bara för dig.`)
};

const tr_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senin hazırladığın mod koleksiyonları: herkese açık, bağlantıyla paylaşılan ya da yalnızca sana özel.`)
};

const zh_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你整理的模组合集：可公开、可凭链接分享，也可仅自己可见。`)
};

const ja_kits_console_description = /** @type {(inputs: Kits_Console_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたがまとめた MOD コレクション。公開、リンク共有、自分専用から選べます。`)
};

/**
* | output |
* | --- |
* | "Collections of mods you curate: public, shared by link or just for you." |
*
* @param {Kits_Console_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_console_description = /** @type {((inputs?: Kits_Console_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Console_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_console_description(inputs)
	if (locale === "de") return de_kits_console_description(inputs)
	if (locale === "fr") return fr_kits_console_description(inputs)
	if (locale === "it") return it_kits_console_description(inputs)
	if (locale === "nl") return nl_kits_console_description(inputs)
	if (locale === "pl") return pl_kits_console_description(inputs)
	if (locale === "pt") return pt_kits_console_description(inputs)
	if (locale === "ru") return ru_kits_console_description(inputs)
	if (locale === "sv") return sv_kits_console_description(inputs)
	if (locale === "tr") return tr_kits_console_description(inputs)
	if (locale === "zh") return zh_kits_console_description(inputs)
	if (locale === "ja") return ja_kits_console_description(inputs)
	return en_kits_console_description(inputs)
});
