/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_410_TextInputs */

const en_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This content is no longer available. You can browse other mods instead.`)
};

const es_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este contenido ya no está disponible. Puedes explorar otros mods.`)
};

const de_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Inhalt ist nicht mehr verfügbar. Stöbere stattdessen in anderen Mods.`)
};

const fr_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce contenu n’est plus disponible. Vous pouvez parcourir d’autres mods.`)
};

const it_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo contenuto non è più disponibile. Puoi sfogliare altri mod.`)
};

const nl_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze inhoud is niet meer beschikbaar. Bekijk in plaats daarvan andere mods.`)
};

const pl_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta treść nie jest już dostępna. Możesz przejrzeć inne mody.`)
};

const pt_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este conteúdo não está mais disponível. Você pode explorar outros mods.`)
};

const ru_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот материал больше недоступен. Можно посмотреть другие моды.`)
};

const sv_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Innehållet är inte längre tillgängligt. Du kan bläddra bland andra moddar.`)
};

const tr_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu içerik artık mevcut değil. Bunun yerine diğer modlara göz atabilirsiniz.`)
};

const zh_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此内容已不可用。你可以浏览其他模组。`)
};

const ja_shell_410_text = /** @type {(inputs: Shell_410_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このコンテンツは利用できなくなりました。他のMODをご覧ください。`)
};

/**
* | output |
* | --- |
* | "This content is no longer available. You can browse other mods instead." |
*
* @param {Shell_410_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_410_text = /** @type {((inputs?: Shell_410_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_410_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_410_text(inputs)
	if (locale === "de") return de_shell_410_text(inputs)
	if (locale === "fr") return fr_shell_410_text(inputs)
	if (locale === "it") return it_shell_410_text(inputs)
	if (locale === "nl") return nl_shell_410_text(inputs)
	if (locale === "pl") return pl_shell_410_text(inputs)
	if (locale === "pt") return pt_shell_410_text(inputs)
	if (locale === "ru") return ru_shell_410_text(inputs)
	if (locale === "sv") return sv_shell_410_text(inputs)
	if (locale === "tr") return tr_shell_410_text(inputs)
	if (locale === "zh") return zh_shell_410_text(inputs)
	if (locale === "ja") return ja_shell_410_text(inputs)
	return en_shell_410_text(inputs)
});
