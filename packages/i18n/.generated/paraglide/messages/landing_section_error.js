/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Section_ErrorInputs */

const en_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn’t reach this part of the map. Reload the page in a minute.`)
};

const es_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No pudimos llegar a esta parte del mapa. Recarga la página en un minuto.`)
};

const de_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Teil der Karte ist gerade nicht erreichbar. Lade die Seite in einer Minute neu.`)
};

const fr_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’atteindre cette partie de la carte. Rechargez la page dans une minute.`)
};

const it_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non riusciamo a raggiungere questa parte della mappa. Ricarica la pagina tra un minuto.`)
};

const nl_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We konden dit deel van de kaart niet bereiken. Laad de pagina over een minuut opnieuw.`)
};

const pl_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się dotrzeć do tej części mapy. Odśwież stronę za minutę.`)
};

const pt_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não conseguimos alcançar esta parte do mapa. Recarregue a página em um minuto.`)
};

const ru_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось добраться до этой части карты. Обновите страницу через минуту.`)
};

const sv_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi nådde inte den här delen av kartan. Ladda om sidan om en minut.`)
};

const tr_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haritanın bu kısmına ulaşamadık. Bir dakika sonra sayfayı yenile.`)
};

const zh_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂时无法到达地图的这一部分。请过一分钟再刷新页面。`)
};

const ja_landing_section_error = /** @type {(inputs: Landing_Section_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地図のこの部分に到達できませんでした。1分後にページを再読み込みしてください。`)
};

/**
* | output |
* | --- |
* | "We couldn’t reach this part of the map. Reload the page in a minute." |
*
* @param {Landing_Section_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_section_error = /** @type {((inputs?: Landing_Section_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Section_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_section_error(inputs)
	if (locale === "de") return de_landing_section_error(inputs)
	if (locale === "fr") return fr_landing_section_error(inputs)
	if (locale === "it") return it_landing_section_error(inputs)
	if (locale === "nl") return nl_landing_section_error(inputs)
	if (locale === "pl") return pl_landing_section_error(inputs)
	if (locale === "pt") return pt_landing_section_error(inputs)
	if (locale === "ru") return ru_landing_section_error(inputs)
	if (locale === "sv") return sv_landing_section_error(inputs)
	if (locale === "tr") return tr_landing_section_error(inputs)
	if (locale === "zh") return zh_landing_section_error(inputs)
	if (locale === "ja") return ja_landing_section_error(inputs)
	return en_landing_section_error(inputs)
});
