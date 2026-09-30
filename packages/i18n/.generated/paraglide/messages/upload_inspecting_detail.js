/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Inspecting_DetailInputs */

const en_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatic checks run on our side. You can keep filling in the other steps.`)
};

const es_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las comprobaciones automáticas se hacen en nuestro lado. Puedes seguir con los demás pasos.`)
};

const de_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die automatischen Checks laufen bei uns. Du kannst die anderen Schritte schon ausfüllen.`)
};

const fr_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les vérifications automatiques tournent de notre côté. Vous pouvez remplir les autres étapes.`)
};

const it_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I controlli automatici avvengono da noi. Intanto puoi compilare gli altri passaggi.`)
};

const nl_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De automatische checks draaien bij ons. Je kunt de andere stappen alvast invullen.`)
};

const pl_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatyczne kontrole działają po naszej stronie. Możesz w tym czasie wypełniać kolejne kroki.`)
};

const pt_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As verificações automáticas rodam do nosso lado. Você pode preencher as outras etapas enquanto isso.`)
};

const ru_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автоматические проверки идут на нашей стороне. Можно пока заполнять другие шаги.`)
};

const sv_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De automatiska kontrollerna körs hos oss. Du kan fylla i de andra stegen under tiden.`)
};

const tr_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik kontroller bizim tarafımızda çalışıyor. Bu arada diğer adımları doldurabilirsin.`)
};

const zh_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动检查在服务器端进行，你可以先填写其他步骤。`)
};

const ja_upload_inspecting_detail = /** @type {(inputs: Upload_Inspecting_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自動チェックはサーバー側で行われます。その間にほかの手順を入力できます。`)
};

/**
* | output |
* | --- |
* | "Automatic checks run on our side. You can keep filling in the other steps." |
*
* @param {Upload_Inspecting_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_inspecting_detail = /** @type {((inputs?: Upload_Inspecting_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Inspecting_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_inspecting_detail(inputs)
	if (locale === "de") return de_upload_inspecting_detail(inputs)
	if (locale === "fr") return fr_upload_inspecting_detail(inputs)
	if (locale === "it") return it_upload_inspecting_detail(inputs)
	if (locale === "nl") return nl_upload_inspecting_detail(inputs)
	if (locale === "pl") return pl_upload_inspecting_detail(inputs)
	if (locale === "pt") return pt_upload_inspecting_detail(inputs)
	if (locale === "ru") return ru_upload_inspecting_detail(inputs)
	if (locale === "sv") return sv_upload_inspecting_detail(inputs)
	if (locale === "tr") return tr_upload_inspecting_detail(inputs)
	if (locale === "zh") return zh_upload_inspecting_detail(inputs)
	if (locale === "ja") return ja_upload_inspecting_detail(inputs)
	return en_upload_inspecting_detail(inputs)
});
