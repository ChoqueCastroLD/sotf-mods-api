/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_Unknown_HintInputs */

const en_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shown as unknown on the listing.`)
};

const es_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se mostrará como desconocido en la ficha.`)
};

const de_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird im Eintrag als unbekannt angezeigt.`)
};

const fr_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affiché comme inconnu sur la fiche.`)
};

const it_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verrà mostrato come sconosciuto nella scheda.`)
};

const nl_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wordt in de vermelding als onbekend getoond.`)
};

const pl_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We wpisie będzie oznaczone jako nieznane.`)
};

const pt_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aparece como desconhecido na ficha.`)
};

const ru_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В карточке будет указано, что это неизвестно.`)
};

const sv_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visas som okänt på sidan.`)
};

const tr_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfada bilinmiyor olarak gösterilir.`)
};

const zh_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在页面上显示为未知。`)
};

const ja_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページには「不明」と表示されます。`)
};

/**
* | output |
* | --- |
* | "Shown as unknown on the listing." |
*
* @param {Upload_Multiplayer_Unknown_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_unknown_hint = /** @type {((inputs?: Upload_Multiplayer_Unknown_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_Unknown_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_unknown_hint(inputs)
	if (locale === "de") return de_upload_multiplayer_unknown_hint(inputs)
	if (locale === "fr") return fr_upload_multiplayer_unknown_hint(inputs)
	if (locale === "it") return it_upload_multiplayer_unknown_hint(inputs)
	if (locale === "nl") return nl_upload_multiplayer_unknown_hint(inputs)
	if (locale === "pl") return pl_upload_multiplayer_unknown_hint(inputs)
	if (locale === "pt") return pt_upload_multiplayer_unknown_hint(inputs)
	if (locale === "ru") return ru_upload_multiplayer_unknown_hint(inputs)
	if (locale === "sv") return sv_upload_multiplayer_unknown_hint(inputs)
	if (locale === "tr") return tr_upload_multiplayer_unknown_hint(inputs)
	if (locale === "zh") return zh_upload_multiplayer_unknown_hint(inputs)
	if (locale === "ja") return ja_upload_multiplayer_unknown_hint(inputs)
	return en_upload_multiplayer_unknown_hint(inputs)
});
