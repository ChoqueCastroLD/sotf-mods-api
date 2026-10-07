/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Error_SummaryInputs */

const en_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Some fields need attention. Check the tabs marked in red.`)
};

const es_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algunos campos necesitan atención. Revisa las pestañas marcadas en rojo.`)
};

const de_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einige Felder brauchen Aufmerksamkeit. Prüfe die rot markierten Tabs.`)
};

const fr_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Certains champs demandent votre attention. Vérifiez les onglets marqués en rouge.`)
};

const it_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alcuni campi richiedono attenzione. Controlla le schede segnate in rosso.`)
};

const nl_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enkele velden vragen aandacht. Controleer de rood gemarkeerde tabs.`)
};

const pl_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niektóre pola wymagają uwagi. Sprawdź karty oznaczone na czerwono.`)
};

const pt_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguns campos precisam de atenção. Verifique as abas marcadas em vermelho.`)
};

const ru_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В некоторых полях есть ошибки. Проверьте вкладки, отмеченные красным.`)
};

const sv_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vissa fält behöver ses över. Kontrollera flikarna som är markerade med rött.`)
};

const tr_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bazı alanlar dikkat gerektiriyor. Kırmızı işaretli sekmelere bakın.`)
};

const zh_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分字段需要处理，请检查标红的标签页。`)
};

const ja_jams_editor_error_summary = /** @type {(inputs: Jams_Editor_Error_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認が必要な項目があります。赤い印の付いたタブを確認してください。`)
};

/**
* | output |
* | --- |
* | "Some fields need attention. Check the tabs marked in red." |
*
* @param {Jams_Editor_Error_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_error_summary = /** @type {((inputs?: Jams_Editor_Error_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Error_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_error_summary(inputs)
	if (locale === "de") return de_jams_editor_error_summary(inputs)
	if (locale === "fr") return fr_jams_editor_error_summary(inputs)
	if (locale === "it") return it_jams_editor_error_summary(inputs)
	if (locale === "nl") return nl_jams_editor_error_summary(inputs)
	if (locale === "pl") return pl_jams_editor_error_summary(inputs)
	if (locale === "pt") return pt_jams_editor_error_summary(inputs)
	if (locale === "ru") return ru_jams_editor_error_summary(inputs)
	if (locale === "sv") return sv_jams_editor_error_summary(inputs)
	if (locale === "tr") return tr_jams_editor_error_summary(inputs)
	if (locale === "zh") return zh_jams_editor_error_summary(inputs)
	if (locale === "ja") return ja_jams_editor_error_summary(inputs)
	return en_jams_editor_error_summary(inputs)
});
