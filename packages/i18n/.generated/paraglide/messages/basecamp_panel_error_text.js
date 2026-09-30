/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Panel_Error_TextInputs */

const en_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The rest of the page works. Try again in a moment.`)
};

const es_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El resto de la página funciona. Vuelve a intentarlo en un momento.`)
};

const de_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Rest der Seite funktioniert. Versuche es gleich noch einmal.`)
};

const fr_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le reste de la page fonctionne. Réessaie dans un instant.`)
};

const it_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il resto della pagina funziona. Riprova tra un momento.`)
};

const nl_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De rest van de pagina werkt. Probeer het zo opnieuw.`)
};

const pl_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reszta strony działa. Spróbuj ponownie za chwilę.`)
};

const pt_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O resto da página funciona. Tente de novo em um instante.`)
};

const ru_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Остальная страница работает. Попробуйте ещё раз через минуту.`)
};

const sv_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resten av sidan fungerar. Försök igen om en stund.`)
};

const tr_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfanın geri kalanı çalışıyor. Birazdan yeniden dene.`)
};

const zh_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面其余部分正常。请稍后重试。`)
};

const ja_basecamp_panel_error_text = /** @type {(inputs: Basecamp_Panel_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページのほかの部分は動作しています。少ししてから再試行してください。`)
};

/**
* | output |
* | --- |
* | "The rest of the page works. Try again in a moment." |
*
* @param {Basecamp_Panel_Error_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_panel_error_text = /** @type {((inputs?: Basecamp_Panel_Error_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Panel_Error_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_panel_error_text(inputs)
	if (locale === "de") return de_basecamp_panel_error_text(inputs)
	if (locale === "fr") return fr_basecamp_panel_error_text(inputs)
	if (locale === "it") return it_basecamp_panel_error_text(inputs)
	if (locale === "nl") return nl_basecamp_panel_error_text(inputs)
	if (locale === "pl") return pl_basecamp_panel_error_text(inputs)
	if (locale === "pt") return pt_basecamp_panel_error_text(inputs)
	if (locale === "ru") return ru_basecamp_panel_error_text(inputs)
	if (locale === "sv") return sv_basecamp_panel_error_text(inputs)
	if (locale === "tr") return tr_basecamp_panel_error_text(inputs)
	if (locale === "zh") return zh_basecamp_panel_error_text(inputs)
	if (locale === "ja") return ja_basecamp_panel_error_text(inputs)
	return en_basecamp_panel_error_text(inputs)
});
