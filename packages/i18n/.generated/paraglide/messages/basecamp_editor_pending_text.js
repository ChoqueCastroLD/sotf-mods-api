/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_Pending_TextInputs */

const en_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers usually decide within 72 hours. You can keep improving the listing meanwhile.`)
};

const es_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los guardabosques suelen decidir en menos de 72 horas. Mientras tanto puedes seguir mejorando la ficha.`)
};

const de_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Ranger entscheiden meist innerhalb von 72 Stunden. Bis dahin kannst du die Seite weiter verbessern.`)
};

const fr_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les rangers décident en général sous 72 heures. En attendant, tu peux continuer à améliorer la fiche.`)
};

const it_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Di solito i ranger decidono entro 72 ore. Nel frattempo puoi continuare a migliorare la scheda.`)
};

const nl_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers beslissen meestal binnen 72 uur. Intussen kun je de pagina blijven verbeteren.`)
};

const pl_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strażnicy zwykle decydują w ciągu 72 godzin. W międzyczasie możesz dalej ulepszać stronę.`)
};

const pt_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os guardas costumam decidir em até 72 horas. Enquanto isso, você pode continuar melhorando a página.`)
};

const ru_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обычно рейнджеры решают в течение 72 часов. Пока можно продолжать улучшать страницу.`)
};

const sv_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers beslutar oftast inom 72 timmar. Under tiden kan du fortsätta förbättra sidan.`)
};

const tr_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucular genelde 72 saat içinde karar verir. Bu arada sayfayı geliştirmeye devam edebilirsin.`)
};

const zh_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林员通常会在 72 小时内做出决定。在此期间你可以继续完善页面。`)
};

const ja_basecamp_editor_pending_text = /** @type {(inputs: Basecamp_Editor_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーは通常 72 時間以内に判断します。その間もページの改善を続けられます。`)
};

/**
* | output |
* | --- |
* | "Rangers usually decide within 72 hours. You can keep improving the listing meanwhile." |
*
* @param {Basecamp_Editor_Pending_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_pending_text = /** @type {((inputs?: Basecamp_Editor_Pending_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Pending_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_pending_text(inputs)
	if (locale === "de") return de_basecamp_editor_pending_text(inputs)
	if (locale === "fr") return fr_basecamp_editor_pending_text(inputs)
	if (locale === "it") return it_basecamp_editor_pending_text(inputs)
	if (locale === "nl") return nl_basecamp_editor_pending_text(inputs)
	if (locale === "pl") return pl_basecamp_editor_pending_text(inputs)
	if (locale === "pt") return pt_basecamp_editor_pending_text(inputs)
	if (locale === "ru") return ru_basecamp_editor_pending_text(inputs)
	if (locale === "sv") return sv_basecamp_editor_pending_text(inputs)
	if (locale === "tr") return tr_basecamp_editor_pending_text(inputs)
	if (locale === "zh") return zh_basecamp_editor_pending_text(inputs)
	if (locale === "ja") return ja_basecamp_editor_pending_text(inputs)
	return en_basecamp_editor_pending_text(inputs)
});
