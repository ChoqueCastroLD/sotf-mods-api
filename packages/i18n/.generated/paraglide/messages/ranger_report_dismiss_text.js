/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Dismiss_TextInputs */

const en_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The report was not a problem. Content hidden automatically by reports becomes visible again.`)
};

const es_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El reporte no era un problema. El contenido ocultado automáticamente por reportes vuelve a verse.`)
};

const de_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Meldung war kein Problem. Inhalte, die durch Meldungen automatisch ausgeblendet wurden, werden wieder sichtbar.`)
};

const fr_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le signalement n’était pas fondé. Le contenu masqué automatiquement par des signalements redevient visible.`)
};

const it_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La segnalazione non era un problema. Il contenuto nascosto automaticamente dalle segnalazioni torna visibile.`)
};

const nl_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De melding was geen probleem. Inhoud die automatisch door meldingen werd verborgen, wordt weer zichtbaar.`)
};

const pl_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenie nie było problemem. Treść ukryta automatycznie przez zgłoszenia znów będzie widoczna.`)
};

const pt_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A denúncia não era um problema. O conteúdo ocultado automaticamente por denúncias volta a aparecer.`)
};

const ru_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Жалоба оказалась необоснованной. Содержимое, автоматически скрытое из-за жалоб, снова станет видимым.`)
};

const sv_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmälan var inget problem. Innehåll som dolts automatiskt av anmälningar blir synligt igen.`)
};

const tr_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyet bir sorun değildi. Şikâyetler nedeniyle otomatik gizlenen içerik yeniden görünür.`)
};

const zh_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该举报不成立。因举报被自动隐藏的内容将重新可见。`)
};

const ja_ranger_report_dismiss_text = /** @type {(inputs: Ranger_Report_Dismiss_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告は問題ではありませんでした。報告によって自動的に非表示になったコンテンツは再び表示されます。`)
};

/**
* | output |
* | --- |
* | "The report was not a problem. Content hidden automatically by reports becomes visible again." |
*
* @param {Ranger_Report_Dismiss_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_dismiss_text = /** @type {((inputs?: Ranger_Report_Dismiss_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Dismiss_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_dismiss_text(inputs)
	if (locale === "de") return de_ranger_report_dismiss_text(inputs)
	if (locale === "fr") return fr_ranger_report_dismiss_text(inputs)
	if (locale === "it") return it_ranger_report_dismiss_text(inputs)
	if (locale === "nl") return nl_ranger_report_dismiss_text(inputs)
	if (locale === "pl") return pl_ranger_report_dismiss_text(inputs)
	if (locale === "pt") return pt_ranger_report_dismiss_text(inputs)
	if (locale === "ru") return ru_ranger_report_dismiss_text(inputs)
	if (locale === "sv") return sv_ranger_report_dismiss_text(inputs)
	if (locale === "tr") return tr_ranger_report_dismiss_text(inputs)
	if (locale === "zh") return zh_ranger_report_dismiss_text(inputs)
	if (locale === "ja") return ja_ranger_report_dismiss_text(inputs)
	return en_ranger_report_dismiss_text(inputs)
});
