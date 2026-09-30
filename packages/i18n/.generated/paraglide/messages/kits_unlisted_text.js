/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Unlisted_TextInputs */

const en_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only people with the link or the code can open this kit.`)
};

const es_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo quien tenga el enlace o el código puede abrir este kit.`)
};

const de_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur wer den Link oder den Code hat, kann dieses Kit öffnen.`)
};

const fr_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seules les personnes qui ont le lien ou le code peuvent ouvrir ce kit.`)
};

const it_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo chi ha il link o il codice può aprire questo kit.`)
};

const nl_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen mensen met de link of de code kunnen deze kit openen.`)
};

const pl_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten zestaw otworzą tylko osoby z linkiem lub kodem.`)
};

const pt_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só quem tem o link ou o código pode abrir este kit.`)
};

const ru_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот набор могут открыть только те, у кого есть ссылка или код.`)
};

const sv_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara den som har länken eller koden kan öppna det här kitet.`)
};

const tr_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kiti yalnızca bağlantıya veya koda sahip olanlar açabilir.`)
};

const zh_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只有持有链接或代码的人才能打开这个套装。`)
};

const ja_kits_unlisted_text = /** @type {(inputs: Kits_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このキットはリンクかコードを知っている人だけが開けます。`)
};

/**
* | output |
* | --- |
* | "Only people with the link or the code can open this kit." |
*
* @param {Kits_Unlisted_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_unlisted_text = /** @type {((inputs?: Kits_Unlisted_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Unlisted_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_unlisted_text(inputs)
	if (locale === "de") return de_kits_unlisted_text(inputs)
	if (locale === "fr") return fr_kits_unlisted_text(inputs)
	if (locale === "it") return it_kits_unlisted_text(inputs)
	if (locale === "nl") return nl_kits_unlisted_text(inputs)
	if (locale === "pl") return pl_kits_unlisted_text(inputs)
	if (locale === "pt") return pt_kits_unlisted_text(inputs)
	if (locale === "ru") return ru_kits_unlisted_text(inputs)
	if (locale === "sv") return sv_kits_unlisted_text(inputs)
	if (locale === "tr") return tr_kits_unlisted_text(inputs)
	if (locale === "zh") return zh_kits_unlisted_text(inputs)
	if (locale === "ja") return ja_kits_unlisted_text(inputs)
	return en_kits_unlisted_text(inputs)
});
