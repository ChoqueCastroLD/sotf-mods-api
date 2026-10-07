/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ error: NonNullable<unknown>, next: NonNullable<unknown> }} Admin_Builds_Sync_Failing_TextInputs */

const en_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reason: ${i?.error}. The next check runs after ${i?.next}.`)
};

const es_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motivo: ${i?.error}. La próxima consulta se hará después de ${i?.next}.`)
};

const de_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Grund: ${i?.error}. Die nächste Prüfung läuft nach ${i?.next}.`)
};

const fr_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motif : ${i?.error}. La prochaine vérification aura lieu après ${i?.next}.`)
};

const it_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motivo: ${i?.error}. Il prossimo controllo avverrà dopo ${i?.next}.`)
};

const nl_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reden: ${i?.error}. De volgende controle loopt na ${i?.next}.`)
};

const pl_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Powód: ${i?.error}. Następne sprawdzenie odbędzie się po ${i?.next}.`)
};

const pt_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motivo: ${i?.error}. A próxima verificação acontece depois de ${i?.next}.`)
};

const ru_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Причина: ${i?.error}. Следующая проверка пройдёт после ${i?.next}.`)
};

const sv_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Orsak: ${i?.error}. Nästa kontroll körs efter ${i?.next}.`)
};

const tr_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Neden: ${i?.error}. Sonraki kontrol ${i?.next} sonrasında yapılacak.`)
};

const zh_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`原因：${i?.error}。下次检查将在 ${i?.next} 之后进行。`)
};

const ja_admin_builds_sync_failing_text = /** @type {(inputs: Admin_Builds_Sync_Failing_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`理由: ${i?.error}。次の確認は ${i?.next} 以降に行われます。`)
};

/**
* | output |
* | --- |
* | "Reason: {error}. The next check runs after {next}." |
*
* @param {Admin_Builds_Sync_Failing_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sync_failing_text = /** @type {((inputs: Admin_Builds_Sync_Failing_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_Failing_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sync_failing_text(inputs)
	if (locale === "de") return de_admin_builds_sync_failing_text(inputs)
	if (locale === "fr") return fr_admin_builds_sync_failing_text(inputs)
	if (locale === "it") return it_admin_builds_sync_failing_text(inputs)
	if (locale === "nl") return nl_admin_builds_sync_failing_text(inputs)
	if (locale === "pl") return pl_admin_builds_sync_failing_text(inputs)
	if (locale === "pt") return pt_admin_builds_sync_failing_text(inputs)
	if (locale === "ru") return ru_admin_builds_sync_failing_text(inputs)
	if (locale === "sv") return sv_admin_builds_sync_failing_text(inputs)
	if (locale === "tr") return tr_admin_builds_sync_failing_text(inputs)
	if (locale === "zh") return zh_admin_builds_sync_failing_text(inputs)
	if (locale === "ja") return ja_admin_builds_sync_failing_text(inputs)
	return en_admin_builds_sync_failing_text(inputs)
});
