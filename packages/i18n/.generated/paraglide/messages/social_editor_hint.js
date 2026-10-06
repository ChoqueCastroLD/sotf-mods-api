/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ modifier: NonNullable<unknown> }} Social_Editor_HintInputs */

const en_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown: **bold**, *italic*, \`code\`, [link](url), ||spoiler||, @mentions · ${i?.modifier}+Enter to send`)
};

const es_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown: **negrita**, *cursiva*, \`código\`, [enlace](url), ||spoiler||, @menciones · ${i?.modifier}+Intro para enviar`)
};

const de_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown: **fett**, *kursiv*, \`Code\`, [Link](URL), ||Spoiler||, @Erwähnungen · ${i?.modifier}+Enter zum Senden`)
};

const fr_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown : **gras**, *italique*, \`code\`, [lien](url), ||spoiler||, @mentions · ${i?.modifier}+Entrée pour envoyer`)
};

const it_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown: **grassetto**, *corsivo*, \`codice\`, [link](url), ||spoiler||, @menzioni · ${i?.modifier}+Invio per inviare`)
};

const nl_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown: **vet**, *cursief*, \`code\`, [link](url), ||spoiler||, @vermeldingen · ${i?.modifier}+Enter om te versturen`)
};

const pl_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown: **pogrubienie**, *kursywa*, \`kod\`, [link](url), ||spoiler||, @wzmianki · ${i?.modifier}+Enter, aby wysłać`)
};

const pt_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown: **negrito**, *itálico*, \`código\`, [link](url), ||spoiler||, @menções · ${i?.modifier}+Enter para enviar`)
};

const ru_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown: **жирный**, *курсив*, \`код\`, [ссылка](url), ||спойлер||, @упоминания · ${i?.modifier}+Enter, чтобы отправить`)
};

const sv_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown: **fet**, *kursiv*, \`kod\`, [länk](url), ||spoiler||, @omnämnanden · ${i?.modifier}+Enter för att skicka`)
};

const tr_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown: **kalın**, *italik*, \`kod\`, [bağlantı](url), ||spoiler||, @bahsetmeler · göndermek için ${i?.modifier}+Enter`)
};

const zh_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown：**粗体**、*斜体*、\`代码\`、[链接](url)、||剧透||、@提及 · ${i?.modifier}+Enter 发送`)
};

const ja_social_editor_hint = /** @type {(inputs: Social_Editor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markdown：**太字**、*斜体*、\`コード\`、[リンク](url)、||ネタバレ||、@メンション · ${i?.modifier}+Enter で送信`)
};

/**
* | output |
* | --- |
* | "Markdown: **bold**, *italic*, `code`, [link](url), \|\|spoiler\|\|, @mentions · {modifier}+Enter to send" |
*
* @param {Social_Editor_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_hint = /** @type {((inputs: Social_Editor_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_hint(inputs)
	if (locale === "de") return de_social_editor_hint(inputs)
	if (locale === "fr") return fr_social_editor_hint(inputs)
	if (locale === "it") return it_social_editor_hint(inputs)
	if (locale === "nl") return nl_social_editor_hint(inputs)
	if (locale === "pl") return pl_social_editor_hint(inputs)
	if (locale === "pt") return pt_social_editor_hint(inputs)
	if (locale === "ru") return ru_social_editor_hint(inputs)
	if (locale === "sv") return sv_social_editor_hint(inputs)
	if (locale === "tr") return tr_social_editor_hint(inputs)
	if (locale === "zh") return zh_social_editor_hint(inputs)
	if (locale === "ja") return ja_social_editor_hint(inputs)
	return en_social_editor_hint(inputs)
});
