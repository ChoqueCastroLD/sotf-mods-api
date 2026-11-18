/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Link_Guide_HintInputs */

const en_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Step by step: upload, publish, stats`)
};

const es_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paso a paso: subir, publicar, estadísticas`)
};

const de_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schritt für Schritt: hochladen, veröffentlichen, Statistiken`)
};

const fr_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas à pas : envoi, publication, statistiques`)
};

const it_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passo per passo: caricare, pubblicare, statistiche`)
};

const nl_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stap voor stap: uploaden, publiceren, statistieken`)
};

const pl_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krok po kroku: wysyłanie, publikacja, statystyki`)
};

const pt_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passo a passo: enviar, publicar, estatísticas`)
};

const ru_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По шагам: загрузка, публикация, статистика`)
};

const sv_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steg för steg: ladda upp, publicera, statistik`)
};

const tr_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adım adım: yükleme, yayınlama, istatistikler`)
};

const zh_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分步说明：上传、发布、统计`)
};

const ja_api_link_guide_hint = /** @type {(inputs: Api_Link_Guide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手順：アップロード、公開、統計`)
};

/**
* | output |
* | --- |
* | "Step by step: upload, publish, stats" |
*
* @param {Api_Link_Guide_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_link_guide_hint = /** @type {((inputs?: Api_Link_Guide_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Link_Guide_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_link_guide_hint(inputs)
	if (locale === "de") return de_api_link_guide_hint(inputs)
	if (locale === "fr") return fr_api_link_guide_hint(inputs)
	if (locale === "it") return it_api_link_guide_hint(inputs)
	if (locale === "nl") return nl_api_link_guide_hint(inputs)
	if (locale === "pl") return pl_api_link_guide_hint(inputs)
	if (locale === "pt") return pt_api_link_guide_hint(inputs)
	if (locale === "ru") return ru_api_link_guide_hint(inputs)
	if (locale === "sv") return sv_api_link_guide_hint(inputs)
	if (locale === "tr") return tr_api_link_guide_hint(inputs)
	if (locale === "zh") return zh_api_link_guide_hint(inputs)
	if (locale === "ja") return ja_api_link_guide_hint(inputs)
	return en_api_link_guide_hint(inputs)
});
