/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Settings_Templates_TextInputs */

const en_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("en", i?.max, {});return /** @type {LocalizedString} */ (`Up to ${max__number} ready-made answers (installation steps, known conflicts…) to copy into comments and review replies.`)
};

const es_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("es", i?.max, {});return /** @type {LocalizedString} */ (`Hasta ${max__number} respuestas preparadas (pasos de instalación, conflictos conocidos…) para copiar en comentarios y respuestas a reseñas.`)
};

const de_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("de", i?.max, {});return /** @type {LocalizedString} */ (`Bis zu ${max__number} fertige Antworten (Installationsschritte, bekannte Konflikte…) zum Kopieren in Kommentare und Antworten auf Bewertungen.`)
};

const fr_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("fr", i?.max, {});return /** @type {LocalizedString} */ (`Jusqu’à ${max__number} réponses toutes prêtes (étapes d’installation, conflits connus…) à copier dans les commentaires et les réponses aux avis.`)
};

const it_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("it", i?.max, {});return /** @type {LocalizedString} */ (`Fino a ${max__number} risposte pronte (passaggi di installazione, conflitti noti…) da copiare nei commenti e nelle risposte alle recensioni.`)
};

const nl_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("nl", i?.max, {});return /** @type {LocalizedString} */ (`Tot ${max__number} kant-en-klare antwoorden (installatiestappen, bekende conflicten…) om te kopiëren in reacties en antwoorden op reviews.`)
};

const pl_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pl", i?.max, {});return /** @type {LocalizedString} */ (`Do ${max__number} gotowych odpowiedzi (kroki instalacji, znane konflikty…) do kopiowania do komentarzy i odpowiedzi na recenzje.`)
};

const pt_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pt", i?.max, {});return /** @type {LocalizedString} */ (`Até ${max__number} respostas prontas (passos de instalação, conflitos conhecidos…) para copiar em comentários e respostas a avaliações.`)
};

const ru_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ru", i?.max, {});return /** @type {LocalizedString} */ (`До ${max__number} готовых ответов (шаги установки, известные конфликты…) для вставки в комментарии и ответы на отзывы.`)
};

const sv_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("sv", i?.max, {});return /** @type {LocalizedString} */ (`Upp till ${max__number} färdiga svar (installationssteg, kända konflikter…) att kopiera till kommentarer och svar på recensioner.`)
};

const tr_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("tr", i?.max, {});return /** @type {LocalizedString} */ (`Yorumlara ve inceleme yanıtlarına kopyalamak için en fazla ${max__number} hazır yanıt (kurulum adımları, bilinen çakışmalar…).`)
};

const zh_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`最多 ${max__number} 条现成回复（安装步骤、已知冲突……），可复制到评论和评价回复中。`)
};

const ja_settings_templates_text = /** @type {(inputs: Settings_Templates_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`コメントやレビューへの返信にコピーできる定型文（インストール手順、既知の競合など）を最大 ${max__number} 件。`)
};

/**
* | output |
* | --- |
* | "Up to {max__number} ready-made answers (installation steps, known conflicts…) to copy into comments and review replies." |
*
* @param {Settings_Templates_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_templates_text = /** @type {((inputs: Settings_Templates_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Templates_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_templates_text(inputs)
	if (locale === "de") return de_settings_templates_text(inputs)
	if (locale === "fr") return fr_settings_templates_text(inputs)
	if (locale === "it") return it_settings_templates_text(inputs)
	if (locale === "nl") return nl_settings_templates_text(inputs)
	if (locale === "pl") return pl_settings_templates_text(inputs)
	if (locale === "pt") return pt_settings_templates_text(inputs)
	if (locale === "ru") return ru_settings_templates_text(inputs)
	if (locale === "sv") return sv_settings_templates_text(inputs)
	if (locale === "tr") return tr_settings_templates_text(inputs)
	if (locale === "zh") return zh_settings_templates_text(inputs)
	if (locale === "ja") return ja_settings_templates_text(inputs)
	return en_settings_templates_text(inputs)
});
