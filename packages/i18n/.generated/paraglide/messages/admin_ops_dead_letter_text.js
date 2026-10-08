/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Ops_Dead_Letter_TextInputs */

const en_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Failed jobs waiting: ${i?.count}. They ran out of retries and nothing will run them again. Review them below, then retry or discard them.`)
};

const es_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tareas fallidas en espera: ${i?.count}. Se quedaron sin reintentos y nada volverá a ejecutarlas. Revísalas abajo y luego reinténtalas o descártalas.`)
};

const de_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fehlgeschlagene Jobs im Wartezustand: ${i?.count}. Sie haben keine Versuche mehr übrig und werden nicht erneut ausgeführt. Prüfe sie unten und führe sie dann erneut aus oder verwirf sie.`)
};

const fr_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tâches en échec en attente : ${i?.count}. Elles n’ont plus d’essais et rien ne les relancera. Consultez-les ci-dessous, puis relancez-les ou abandonnez-les.`)
};

const it_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Job falliti in attesa: ${i?.count}. Hanno esaurito i tentativi e nulla li eseguirà di nuovo. Controllali qui sotto, poi riprovali o scartali.`)
};

const nl_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wachtende mislukte taken: ${i?.count}. Ze hebben geen pogingen meer over en niets voert ze nog uit. Bekijk ze hieronder en voer ze opnieuw uit of verwijder ze.`)
};

const pl_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oczekujące nieudane zadania: ${i?.count}. Wyczerpały próby i nic ich już nie uruchomi. Sprawdź je poniżej, a potem ponów lub odrzuć.`)
};

const pt_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tarefas com falha em espera: ${i?.count}. Esgotaram as tentativas e nada vai executá-las de novo. Veja abaixo e depois tente de novo ou descarte.`)
};

const ru_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Неудачных задач в ожидании: ${i?.count}. Попытки закончились, и больше их ничто не запустит. Посмотри их ниже, затем повтори или удали.`)
};

const sv_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Misslyckade jobb som väntar: ${i?.count}. De har slut på försök och inget kör dem igen. Granska dem nedan och försök sedan igen eller släng dem.`)
};

const tr_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bekleyen başarısız işler: ${i?.count}. Deneme hakları bitti ve onları artık hiçbir şey çalıştırmayacak. Aşağıda incele, sonra yeniden dene ya da at.`)
};

const zh_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`等待处理的失败任务:${i?.count}。它们的重试次数已用完,不会再被运行。请在下方查看,然后重试或丢弃。`)
};

const ja_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`待機中の失敗したジョブ: ${i?.count}。再試行回数を使い切っており、このままでは再実行されません。下で確認し、再試行するか破棄してください。`)
};

/**
* | output |
* | --- |
* | "Failed jobs waiting: {count}. They ran out of retries and nothing will run them again. Review them below, then retry or discard them." |
*
* @param {Admin_Ops_Dead_Letter_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dead_letter_text = /** @type {((inputs: Admin_Ops_Dead_Letter_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dead_Letter_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dead_letter_text(inputs)
	if (locale === "de") return de_admin_ops_dead_letter_text(inputs)
	if (locale === "fr") return fr_admin_ops_dead_letter_text(inputs)
	if (locale === "it") return it_admin_ops_dead_letter_text(inputs)
	if (locale === "nl") return nl_admin_ops_dead_letter_text(inputs)
	if (locale === "pl") return pl_admin_ops_dead_letter_text(inputs)
	if (locale === "pt") return pt_admin_ops_dead_letter_text(inputs)
	if (locale === "ru") return ru_admin_ops_dead_letter_text(inputs)
	if (locale === "sv") return sv_admin_ops_dead_letter_text(inputs)
	if (locale === "tr") return tr_admin_ops_dead_letter_text(inputs)
	if (locale === "zh") return zh_admin_ops_dead_letter_text(inputs)
	if (locale === "ja") return ja_admin_ops_dead_letter_text(inputs)
	return en_admin_ops_dead_letter_text(inputs)
});
