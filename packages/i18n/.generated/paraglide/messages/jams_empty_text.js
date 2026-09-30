/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Empty_TextInputs */

const en_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The next Mod Jam will be announced here. Follow the site to hear about it first.`)
};

const es_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El próximo Mod Jam se anunciará aquí. Sigue el sitio para enterarte primero.`)
};

const de_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die nächste Mod Jam wird hier angekündigt. Folge der Seite, um es als Erster zu erfahren.`)
};

const fr_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le prochain Mod Jam sera annoncé ici. Suivez le site pour être prévenu en premier.`)
};

const it_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il prossimo Mod Jam sarà annunciato qui. Segui il sito per saperlo per primo.`)
};

const nl_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De volgende Mod Jam wordt hier aangekondigd. Volg de site om het als eerste te horen.`)
};

const pl_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następny Mod Jam zostanie ogłoszony tutaj. Obserwuj serwis, aby dowiedzieć się jako pierwszy.`)
};

const pt_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O próximo Mod Jam será anunciado aqui. Acompanhe o site para saber primeiro.`)
};

const ru_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следующий мод-джем будет анонсирован здесь. Следите за сайтом, чтобы узнать первыми.`)
};

const sv_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa Mod Jam tillkännages här. Följ sajten för att få veta först.`)
};

const tr_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir sonraki Mod Jam burada duyurulacak. İlk siz öğrenmek için siteyi takip edin.`)
};

const zh_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一场 Mod Jam 将在这里公布。关注本站即可第一时间获知。`)
};

const ja_jams_empty_text = /** @type {(inputs: Jams_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次の Mod ジャムはここで告知されます。いち早く知るにはサイトをフォローしてください。`)
};

/**
* | output |
* | --- |
* | "The next Mod Jam will be announced here. Follow the site to hear about it first." |
*
* @param {Jams_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_empty_text = /** @type {((inputs?: Jams_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_empty_text(inputs)
	if (locale === "de") return de_jams_empty_text(inputs)
	if (locale === "fr") return fr_jams_empty_text(inputs)
	if (locale === "it") return it_jams_empty_text(inputs)
	if (locale === "nl") return nl_jams_empty_text(inputs)
	if (locale === "pl") return pl_jams_empty_text(inputs)
	if (locale === "pt") return pt_jams_empty_text(inputs)
	if (locale === "ru") return ru_jams_empty_text(inputs)
	if (locale === "sv") return sv_jams_empty_text(inputs)
	if (locale === "tr") return tr_jams_empty_text(inputs)
	if (locale === "zh") return zh_jams_empty_text(inputs)
	if (locale === "ja") return ja_jams_empty_text(inputs)
	return en_jams_empty_text(inputs)
});
