/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Limits_BusyInputs */

const en_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you write too fast, Kelvin asks for a break for a few seconds. Nothing is lost.`)
};

const es_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si escribes demasiado rápido, Kelvin pide un descanso de unos segundos. No se pierde nada.`)
};

const de_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schreibst du zu schnell, bittet Kelvin um ein paar Sekunden Pause. Es geht nichts verloren.`)
};

const fr_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si vous écrivez trop vite, Kelvin demande quelques secondes de pause. Rien n’est perdu.`)
};

const it_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se scrivi troppo in fretta, Kelvin chiede qualche secondo di pausa. Non si perde nulla.`)
};

const nl_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schrijf je te snel, dan vraagt Kelvin om een paar seconden pauze. Er gaat niets verloren.`)
};

const pl_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeśli piszesz za szybko, Kelvin prosi o kilka sekund przerwy. Nic nie przepada.`)
};

const pt_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se você escrever rápido demais, o Kelvin pede alguns segundos de pausa. Nada se perde.`)
};

const ru_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Если писать слишком быстро, Кельвин попросит пару секунд перерыва. Ничего не потеряется.`)
};

const sv_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriver du för snabbt ber Kelvin om några sekunders paus. Inget går förlorat.`)
};

const tr_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok hızlı yazarsan Kelvin birkaç saniye mola ister. Hiçbir şey kaybolmaz.`)
};

const zh_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果你写得太快，Kelvin 会要求休息几秒。不会丢失任何内容。`)
};

const ja_content_kelvin_limits_busy = /** @type {(inputs: Content_Kelvin_Limits_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`書き込みが速すぎると、ケルヴィンが数秒の休憩を求めます。内容が失われることはありません。`)
};

/**
* | output |
* | --- |
* | "If you write too fast, Kelvin asks for a break for a few seconds. Nothing is lost." |
*
* @param {Content_Kelvin_Limits_BusyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_limits_busy = /** @type {((inputs?: Content_Kelvin_Limits_BusyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Limits_BusyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_limits_busy(inputs)
	if (locale === "de") return de_content_kelvin_limits_busy(inputs)
	if (locale === "fr") return fr_content_kelvin_limits_busy(inputs)
	if (locale === "it") return it_content_kelvin_limits_busy(inputs)
	if (locale === "nl") return nl_content_kelvin_limits_busy(inputs)
	if (locale === "pl") return pl_content_kelvin_limits_busy(inputs)
	if (locale === "pt") return pt_content_kelvin_limits_busy(inputs)
	if (locale === "ru") return ru_content_kelvin_limits_busy(inputs)
	if (locale === "sv") return sv_content_kelvin_limits_busy(inputs)
	if (locale === "tr") return tr_content_kelvin_limits_busy(inputs)
	if (locale === "zh") return zh_content_kelvin_limits_busy(inputs)
	if (locale === "ja") return ja_content_kelvin_limits_busy(inputs)
	return en_content_kelvin_limits_busy(inputs)
});
