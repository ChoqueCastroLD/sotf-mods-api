/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Me_Report_ThanksInputs */

const en_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Thanks — your report on ${i?.mod} is on the map`)
};

const es_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gracias: tu informe sobre ${i?.mod} ya está en el mapa`)
};

const de_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Danke – dein Bericht zu ${i?.mod} ist auf der Karte`)
};

const fr_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Merci — votre rapport sur ${i?.mod} est sur la carte`)
};

const it_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Grazie: il tuo rapporto su ${i?.mod} è sulla mappa`)
};

const nl_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bedankt — je rapport over ${i?.mod} staat op de kaart`)
};

const pl_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dzięki — twój raport o ${i?.mod} jest na mapie`)
};

const pt_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Valeu — seu relatório sobre ${i?.mod} está no mapa`)
};

const ru_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Спасибо — ваш отчёт о ${i?.mod} уже на карте`)
};

const sv_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tack — din rapport om ${i?.mod} finns på kartan`)
};

const tr_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Teşekkürler — ${i?.mod} hakkındaki raporun haritada`)
};

const zh_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`谢谢——你关于 ${i?.mod} 的报告已标在地图上`)
};

const ja_me_report_thanks = /** @type {(inputs: Me_Report_ThanksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ありがとうございます。${i?.mod} についてのレポートが地図に載りました`)
};

/**
* | output |
* | --- |
* | "Thanks — your report on {mod} is on the map" |
*
* @param {Me_Report_ThanksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_thanks = /** @type {((inputs: Me_Report_ThanksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_ThanksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_thanks(inputs)
	if (locale === "de") return de_me_report_thanks(inputs)
	if (locale === "fr") return fr_me_report_thanks(inputs)
	if (locale === "it") return it_me_report_thanks(inputs)
	if (locale === "nl") return nl_me_report_thanks(inputs)
	if (locale === "pl") return pl_me_report_thanks(inputs)
	if (locale === "pt") return pt_me_report_thanks(inputs)
	if (locale === "ru") return ru_me_report_thanks(inputs)
	if (locale === "sv") return sv_me_report_thanks(inputs)
	if (locale === "tr") return tr_me_report_thanks(inputs)
	if (locale === "zh") return zh_me_report_thanks(inputs)
	if (locale === "ja") return ja_me_report_thanks(inputs)
	return en_me_report_thanks(inputs)
});
