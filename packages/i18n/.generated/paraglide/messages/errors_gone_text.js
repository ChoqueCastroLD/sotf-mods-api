/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Gone_TextInputs */

const en_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What used to be here was removed for good. Try exploring other mods.`)
};

const es_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo que había aquí se eliminó para siempre. Prueba a explorar otros mods.`)
};

const de_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was hier war, wurde endgültig entfernt. Entdecke doch andere Mods.`)
};

const fr_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce qui se trouvait ici a été supprimé définitivement. Explorez d’autres mods.`)
};

const it_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ciò che c’era qui è stato rimosso per sempre. Prova a esplorare altre mod.`)
};

const nl_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat hier stond, is definitief verwijderd. Verken andere mods.`)
};

const pl_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To, co tu było, zostało usunięte na zawsze. Przejrzyj inne mody.`)
};

const pt_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que estava aqui foi removido de vez. Que tal explorar outros mods?`)
};

const ru_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`То, что было здесь, удалено навсегда. Загляните в другие моды.`)
};

const sv_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det som fanns här har tagits bort för gott. Utforska andra moddar.`)
};

const tr_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Burada olan şey kalıcı olarak kaldırıldı. Başka modları keşfetmeyi dene.`)
};

const zh_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这里原有的内容已被永久移除。去看看其他模组吧。`)
};

const ja_errors_gone_text = /** @type {(inputs: Errors_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここにあったものは完全に削除されました。ほかの MOD を探してみてください。`)
};

/**
* | output |
* | --- |
* | "What used to be here was removed for good. Try exploring other mods." |
*
* @param {Errors_Gone_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_gone_text = /** @type {((inputs?: Errors_Gone_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Gone_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_gone_text(inputs)
	if (locale === "de") return de_errors_gone_text(inputs)
	if (locale === "fr") return fr_errors_gone_text(inputs)
	if (locale === "it") return it_errors_gone_text(inputs)
	if (locale === "nl") return nl_errors_gone_text(inputs)
	if (locale === "pl") return pl_errors_gone_text(inputs)
	if (locale === "pt") return pt_errors_gone_text(inputs)
	if (locale === "ru") return ru_errors_gone_text(inputs)
	if (locale === "sv") return sv_errors_gone_text(inputs)
	if (locale === "tr") return tr_errors_gone_text(inputs)
	if (locale === "zh") return zh_errors_gone_text(inputs)
	if (locale === "ja") return ja_errors_gone_text(inputs)
	return en_errors_gone_text(inputs)
});
