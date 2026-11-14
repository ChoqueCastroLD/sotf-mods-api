/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Pending_HintInputs */

const en_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A moderator will review this modpack before it appears on the site.`)
};

const es_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un moderador revisará este modpack antes de que aparezca en el sitio.`)
};

const de_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Moderator prüft dieses Modpack, bevor es auf der Seite erscheint.`)
};

const fr_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un modérateur examinera ce modpack avant qu’il n’apparaisse sur le site.`)
};

const it_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un moderatore esaminerà questo modpack prima che appaia sul sito.`)
};

const nl_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een moderator bekijkt deze modpack voordat hij op de site verschijnt.`)
};

const pl_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator sprawdzi ten modpack, zanim pojawi się na stronie.`)
};

const pt_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um moderador vai revisar este modpack antes que ele apareça no site.`)
};

const ru_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модератор проверит этот модпак, прежде чем он появится на сайте.`)
};

const sv_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En moderator granskar modpaketet innan det visas på sidan.`)
};

const tr_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod paketi sitede görünmeden önce bir moderatör tarafından incelenecek.`)
};

const zh_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此整合包需经版主审核后才会在网站上显示。`)
};

const ja_modpacks_pending_hint = /** @type {(inputs: Modpacks_Pending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この Modパックはモデレーターの確認後にサイトに表示されます。`)
};

/**
* | output |
* | --- |
* | "A moderator will review this modpack before it appears on the site." |
*
* @param {Modpacks_Pending_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_pending_hint = /** @type {((inputs?: Modpacks_Pending_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Pending_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_pending_hint(inputs)
	if (locale === "de") return de_modpacks_pending_hint(inputs)
	if (locale === "fr") return fr_modpacks_pending_hint(inputs)
	if (locale === "it") return it_modpacks_pending_hint(inputs)
	if (locale === "nl") return nl_modpacks_pending_hint(inputs)
	if (locale === "pl") return pl_modpacks_pending_hint(inputs)
	if (locale === "pt") return pt_modpacks_pending_hint(inputs)
	if (locale === "ru") return ru_modpacks_pending_hint(inputs)
	if (locale === "sv") return sv_modpacks_pending_hint(inputs)
	if (locale === "tr") return tr_modpacks_pending_hint(inputs)
	if (locale === "zh") return zh_modpacks_pending_hint(inputs)
	if (locale === "ja") return ja_modpacks_pending_hint(inputs)
	return en_modpacks_pending_hint(inputs)
});
